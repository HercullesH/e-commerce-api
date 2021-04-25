import express from 'express';
import cors from 'cors';
import handleError from './app/middlewares/handleError';
import createRoutes from './app/routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
createRoutes(app);
app.use(handleError);

// eslint-disable-next-line no-console
app.listen(3000, () => { console.log('running'); });
