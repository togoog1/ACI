import express = require('express');
let router = express.Router();
import Webaddress from '../models/banner';
import Banner from '../models/banner';




/* CREATE or UPDATE */
router.post('/', (req, res) => {
  if(req.body._id) {
    Banner.findByIdAndUpdate(req.body._id, { "$set": { "name": req.body.name, "address": req.body.address }}, { "new": true, "upsert": true },
      function (err, updatedWebaddress) {
        if (err) {
          res.send(err)
        } else {
          res.send(updatedWebaddress);
        }
      }
    );
  } else {
    let banner:any = new Banner();
    banner.name = req.body.name;
    banner.Webaddress = req.body.Webaddress;
    banner.save((err, newBanner) => {
      Webaddress.findOne({name: req.body.Webaddress}).exec((err, result:any) => {
        if (err) {
          res.send(err)
        } else {
          Webaddress.findByIdAndUpdate(result._id, { "$push": { "banners": newBanner._id }}, { "new": true, "upsert": true },
            function (err, updatedWebaddress) {
              if (err) {
                res.send(err)
              } else {
                res.send(updatedWebaddress);
              }
            }
          );
        }
      });
    })
  }
})


router.get('/:tag', (req, res) => {
  Webaddress.findOne({name: req.params['tag']}).populate('banners').exec(function (err, results:any) {
    if (err) {
      res.send(err)
    } else {
      res.json(results.banner)
    }
  });
})



export default router;
