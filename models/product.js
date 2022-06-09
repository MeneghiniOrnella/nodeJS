const fs = require('fs');
// 1) const path = require('path');
const db = require('../util/db')
const Cart = require('./cart');

/* JSON
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
); 

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};*/

module.exports = class Product{
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    // trabajando con MySQL
    save(){

    }
    static deleteById(id){

    }
    static fetchAll(cb){
        return db.execute('SELECT * FROM products');
    }
    static findById(id, cb){
        
    }
    /* 1) trabajando con archivo JSON
    save(){
        getProductsFromFile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                });
            }else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        }); 
    }
    static deleteById(id){
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if(!err){
                    Cart.deleteProduct(id, product.price);
                }
            });
        });
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
    static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    } */
};
