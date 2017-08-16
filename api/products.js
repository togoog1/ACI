"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var category_1 = require("../models/category");
var product_1 = require("../models/product");
router.post('/', function (req, res) {
    if (req.body._id) {
        product_1.default.findByIdAndUpdate(req.body._id, { "$set": { "name": req.body.name, "price": req.body.price, "image": req.body.image } }, { "new": true, "upsert": true }, function (err, updatedCategory) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updatedCategory);
            }
        });
    }
    else {
        var product = new product_1.default();
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.save(function (err, newProduct) {
            category_1.default.findOne({ name: req.body.category }).exec(function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    category_1.default.findByIdAndUpdate(result._id, { "$push": { "products": newProduct._id } }, { "new": true, "upsert": true }, function (err, updatedCategory) {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send(updatedCategory);
                        }
                    });
                }
            });
        });
    }
});
router.get('/:tag', function (req, res) {
    category_1.default.findOne({ name: req.params['tag'] }).populate('products').exec(function (err, results) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(results.products);
        }
    });
});
router.delete('/:tag', function (req, res) {
    product_1.default.remove({ _id: req.params['tag'] }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('success');
        }
    });
});
exports.default = router;
