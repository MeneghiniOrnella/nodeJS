const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin')
const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
    // 1) res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // 2) res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;