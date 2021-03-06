import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import log from './generators/console/log';
import createSchemaRouter from './generators/schema/schema.router';
import expressWs from 'express-ws';
import { MONGO_URI } from './db';
import { startMongoServer } from './generators/utils/utils';
import createEmailRouter from './generators/email/email.router';
import createCrudRouter from './generators/crud/crud.router';

const app = express();
const wsInfo = expressWs(app).getWss();
app.use(cors());
app.use(express.json());

function startServer() {
	createCrudRouter(app, wsInfo);
	createSchemaRouter(app);
	createEmailRouter(app);

	const PORT = process.env.PORT || 3790;
	app.listen(PORT, '0.0.0.0', _ => log.success('Server is started'));
}

async function main() {
	const mongoCheckStatusLoading = log.loading('Checking mongodb server status');
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		log.stopLoading(mongoCheckStatusLoading);
		log.success('Mongodb server is running');
		startServer();
	} catch (e) {
		await log.stopLoading(mongoCheckStatusLoading);
		log.info(`It's seems you don't start your mongodb server.`);
		log.ynInput('Can we start it for you? (y/n): ', {
			onConfirm: () => {
				startMongoServer();
				log.success('Mongodb server started successfully.');
				startServer();
			},
			onCancel: () => {
				log.error(`Server can't start without mongo server is running, please start mongo server manually.`);
				process.exit();
			}
		});
	}
}

main();