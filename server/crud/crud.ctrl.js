import express from 'express';
import HttpResponse from '../generators/http/HttpResponse';
import WSResponse from '../generators/ws/WSResponse';
import createModel from './crud.model';

const actions = {
    _ADD_ITEM: 'add-item',
    _UPDATE_ITEM: 'update-item',
    _DELETE_ITEM: 'delete-item',
};

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
        const httpResponse = new HttpResponse(res, route.name);
        try {
            const newData = new model({ ...req.body });
            await newData.save();
            httpResponse.json(201, newData, 'Item created!');
        } catch (e) {
            httpResponse.json(422, null, e.message);
        }
    });

    router.put('/:id', async (req, res) => {
        const httpResponse = new HttpResponse(res, route.name + '/' + req.params.id);
        delete req.body._id;
        try {
            await model.updateOne({ _id: req.params.id }, { ...req.body });
            const updated = model.findOne({ _id: req.params.id });
            httpResponse.json(201, updated, 'Item Updated!');
        } catch (e) {
            httpResponse.json(422, null, e.message);
        }
    });

    router.delete('/:id', async (req, res) => {
        const httpResponse = new HttpResponse(res, route.name + '/' + req.params.id);
        try {
            await model.deleteOne({ _id: req.params.id });
            httpResponse.json(200, { _id: req.params.id }, 'Item deleted!');
        } catch (e) {
            httpResponse.json(422, null, e.message);
        }
    });
    // ===== END HTTP HANDLING =====


    // ===== Web Socket HANDLING =====
    router.ws('/ws', (ws, req) => {
        console.log('Connected')
        ws.on('message', async msg => {
            const { value, type } = JSON.parse(msg);
            console.log(type);
            switch (type) {
                case 'post':
                    try {
                        const newData = new model(value);
                        await newData.save();
                        console.log(newData);
                        wsJsonBroadCast('post', 200, {
                            route: route.name,
                            action: actions._ADD_ITEM,
                            data: newData
                        });
                    } catch (e) {
                        wsJsonBroadCast('post', 500, null, e.message)
                    }
                    break;
                case 'put':
                    try {
                        const id = value.id;
                        delete value.id;
                        await model.updateOne({ _id: id }, value);
                        const updated = await model.findOne({ _id: id });
                        console.log(updated);
                        wsJsonBroadCast('put', 200, {
                            route: route.name,
                            action: actions._UPDATE_ITEM,
                            data: updated
                        });
                    } catch (e) {
                        wsJsonBroadCast('put', 422, null, e.message);
                    }
                    break;
                case 'delete':
                    try {
                        await model.deleteOne({ _id: value.id });
                        wsJsonBroadCast('delete', 200, {
                            route: route.name,
                            action: actions._DELETE_ITEM,
                            data: { id: value.id }
                        });
                    } catch (e) {
                        wsJsonBroadCast('delete', 422, null, e.message);
                    }
                    break;
            }
        });
    });
    // ===== END WS HANDLING====

    return router;
}
export default crudCtrl;