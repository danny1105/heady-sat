const express = require('express');
const app = express();

const Product = require('./controllers/product');

const PORT = 3000;

Product.get(app);

app.listen(PORT, () => {
    console.log(`App is now live at https://localhost:${PORT}`);
});