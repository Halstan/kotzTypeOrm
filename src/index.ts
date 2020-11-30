import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import godRoutes from './routes/god.routes';
import armorRoutes from './routes/armor.routes';
import constelationRoutes from './routes/constelation.routes';
import habilityRoutes from './routes/hability.routes';
import knightRoutes from './routes/knight.routes';
import { createConnection } from 'typeorm';

const port = 4000;
const app = express();
createConnection();

// middlewares
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(godRoutes, armorRoutes, constelationRoutes, habilityRoutes, knightRoutes);

app.listen(port);
console.log(`Server on port ${port}`);
