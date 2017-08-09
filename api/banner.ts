import express = require('express');
let router = express.Router();
import WebAddress from '../models/banner';
import Banner from '../models/banner';




/* Create new banner and update
router.post('/', (req, res) => {
  if(req.body._id) {
    Banner.findByIdAndUpdate(req.body._id, { "$set": {"Webaddress": req.body.Webaddress }}, { "new": true, "upsert": true },
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
})*/

/* Retrieve banner*/
router.get('/', (req, res) => {
console.log('hello')
  WebAddress.find({}, function(err, results:any) {
    console.log(results)
if (err) {
  console.log(err)
    res.send(err)
  } else {
    console.log(results)
    res.send(results[0])
  }
});

});

export default router;
