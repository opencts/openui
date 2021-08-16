import express from 'express';
import HttpResponse from '../generators/http/HttpResponse';
import WSResponse from '../generators/ws/WSResponse';
import createModel from './crud.model';

function crudCtrl(route, wsInfo) {
    const router = express.Router();
    const model = createModel(route);

    // Broadcast json response by ws
    const wsJsonBroadCast = (method = 'get', status = 200, data = null, message = 'ok') => {
        WSResponse.jsonBroadCast(wsInfo, status, data, message, route.name, method);
    }

    // ===== HTTP HANDLING =====
    router.get('/', async (req, res) => {
        const httpResponse = new HttpResponse(res, route.name);
        try {
            const data = await model.find({ ...req.query });
            httpResponse.json(200, data);
        } catch (e) {
            httpResponse.json(500, null, 'Unable to read data');
        }
    });

    router.get('/:id', async (req, res) => {
        const httpResponse = new HttpResponse(res, route.name + '/' + req.params.id);
        try {
            const data = await model.findById(req.params.id)
            if (!data) {
                httpResponse.json(404, null, 'Resource not found.')
            } else {
                httpResponse.json(200, data);
            }
        } catch (e) {
            httpResponse.json(500, null, e.message);
        }
    });

    router.post('/', async (req, res) => {
        const httpResponse = new HttpResponse(res, route.name + '/' + req.params.id);
        try {
            const newData = new model({ ...req.body });
            console.log(req.body, newData);
            await newData.save();
            httpResponse.json(201, newData, 'Item created!');
        } catch (e) {
            httpResponse.json(201, null, e.message);
        }
    });

    router.put('/:id', async (req, res) => {
        delete req.body._id;
        try {
            await model.updateOne({ _id: req.params.id }, { ...req.body })
            res.status(200).json({ message: 'Item Updated!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            await model.deleteOne({ _id: req.params.id })
            res.status(200).json({ message: 'Item deleted!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });
    // ===== END HTTP HANDLING =====


    // ===== Web Socket HANDLING =====
    router.ws('/post', (ws, req) => {
        ws.on('message', async msg => {
            try {
                const newData = new model(JSON.parse(msg));
                await newData.save();
                console.log(newData);
                wsJsonBroadCast('post', 200, {
                    route: route.name,
                    posted: newData
                });
            } catch (e) {
                wsJsonBroadCast('post', 500, null, e.message)
            }
        });
    });

    router.ws('/put', (ws, req) => {
        ws.on('message', async msg => {
            try {
                const value = JSON.parse(msg);
                const id = value.id;
                delete value.id;
                const updated = await model.updateOne({ _id: id }, value);
                wsJsonBroadCast('put', 200, {
                    route: route.name,
                    updated
                });
            } catch (e) {
                wsJsonBroadCast('put', 422, null, e.message);
            }
        });
    });

    router.ws('/delete', (ws, req) => {
        ws.on('message', async (msg) => {
            try {
                await model.deleteOne({ _id: JSON.parse(msg).id });
                wsJsonBroadCast('delete', 200, {
                    route: route.name,
                    deletedId: JSON.parse(msg).id
                });
            } catch (e) {
                wsJsonBroadCast('delete', 422, null, e.message);
            }
        });
    });
    // ===== END WS HANDLING====

    return router;
}
export default crudCtrl;