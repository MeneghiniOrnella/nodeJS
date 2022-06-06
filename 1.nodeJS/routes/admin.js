const path = require('path');

const express = require('express');

// 1) const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
/* router.get('/add-product', (req, res, next) => {
    1) res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    3) res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}); */
// /admin/products => GET
router.get('/products', adminController.getProducts);
//router.get('/cart');
//router.get('/checkout');

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
/* router.post('/add-product', (req, res, next) => {
    1) console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/'); 
}); */

module.exports = router;
// module.routes = router;
// module.products = products;