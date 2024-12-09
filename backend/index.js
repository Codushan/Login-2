const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db');
const authRouter = require('./routes/AuthRouter');
const productRouter = require('./routes/ProductRouter');
const cors = require('cors');

// const router = express.Router();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send('pong');
});
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})