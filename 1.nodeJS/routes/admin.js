const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // 1) res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // 2) res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // 1) console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

module.exports = router;
module.products = products;