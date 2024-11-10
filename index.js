import express from 'express';
import cors from 'cors';
import pg from 'pg';

const port = 3001;
const { Pool } = pg;
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen(port);