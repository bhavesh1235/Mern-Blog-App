import express from 'express';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
const PORT=8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);

app.listen(PORT , ()=> console.log(`Service running on ${PORT}`));


Connection();