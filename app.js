const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());


app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Ecommerce Api" })
})

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    sequelize.authenticate();
    console.log('Database synced');
});