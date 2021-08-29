const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();
const { sequelize } = require('./models');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.replace(' ','-');
        cb(null, Date.now() + '-' + fileName);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
app.use(multer({ storage , fileFilter }).single('image'));

const productsRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const authRoute = require('./routes/auth');
const orderRoute = require('./routes/order');

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Ecommerce Api" })
})
app.use(productsRoute);
app.use(categoryRoute);
app.use(authRoute);
app.use(orderRoute);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    sequelize.authenticate();
    // sequelize.sync({ force: true})
    console.log('Database synced');
});