import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import createCrudRouter from './crud/crud.router';
import log from './generators/console/log';
import createSchemaRouter from './generators/schema/schema.router';
import expressWs from 'express-ws';
import { MONGO_URI } from './db';
import { execSync } from 'child_process';

/* Start local mongodb server if local_db is true */
log.info('running safe mode')
const { platform } = process;
try {
	console.log(platform === 'linux')
	if (platform === 'linux') {
		log.input('Mot de passe');
		execSync('sudo service mongod start');
		log.success('Mongo service started sucessfully !');
	}
} catch (e) {
	log.error(`Unabled to start mongod service... 
Please install mongo on your machine.`)
}
/* END */

const app = express();
const wsInfo = expressWs(app).getWss();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).catch((err) => log.error('Unable to connect to Mongo database'));

createCrudRouter(app, wsInfo);
createSchemaRouter(app);

const PORT = process.env.PORT || 3790;
app.listen(PORT, _ => log.success('Server is started'))