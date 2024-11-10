import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen(port);