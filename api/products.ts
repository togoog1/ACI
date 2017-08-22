import express = require('express');
let router = express.Router();
import Category from '../models/category';
import Product from '../models/product';


/* CREATE or UPDATE */
router.post('/', (req, res) => {
  if(req.body._id) {
    Product.findByIdAndUpdate(req.body._id, { "$set": { "name": req.body.name, "price": req.body.price, "image": req.body.image,  "description": req.body.description,  "numberinstock": req.body.numberinstock }}, { "new": true, "upsert": true },
      function (err, updatedCategory) {
        if (err) {
          res.send(err)
        } else {
          res.send(updatedCategory);
        }
      }
    );
  } else {
    let product:any = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.description = req.body.description;
    product.numberinstock = req.body.numberinstock;
    product.save((err, newProduct) => {
      Category.findOne({name: req.body.category}).exec((err, result:any) => {
        if (err) {
          res.send(err)
        } else {
          Category.findByIdAndUpdate(result._id, { "$push": { "products": newProduct._id }}, { "new": true, "upsert": true },
            function (err, updatedCategory) {
              if (err) {
                res.send(err)
              } else {
                res.send(updatedCategory);
              }
            }
          );
        }
      });
    })
  }
})

/* READ */
router.get('/:tag', (req, res) => {
  console.log(req.params["tag"])
  Category.findOne({name: req.params['tag']}).populate('products').exec(function (err, results:any) {

    if (err) {
      res.send(err)
    } else {
      res.json(results.products)
    }
  });
})

/* DELETE */
router.delete('/:tag', (req, res) => {
  Product.remove({_id: req.params['tag']}, (err) => {
    if(err) {
      res.send(err)
    } else {
      res.send('success');
    }
  })
})

export default router;
