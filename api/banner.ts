import express = require('express');
let router = express.Router();
import WebAddress from '../models/banner';
import Banner from '../models/banner';




/* Create new banner and update*/
router.post('/', (req, res) => {
  if(req.body._id) {
    Banner.findByIdAndUpdate(req.body._id, { "$set": {"WebAddress": req.body.Webaddress }}, { "new": true, "upsert": true },
      function (err, updatedWebAddress) {
        if (err) {
          res.send(err)
        } else {
          res.send(updatedWebAddress);
        }
      }
    );
  } else {
    let banner:any = new Banner();
    banner.WebAddress = req.body.WebAddress;
    banner.save((err, newBanner) => {
      WebAddress.findOne({name: req.body.WebAddress}).exec((err, result:any) => {
        if (err) {
          res.send(err)
        } else {
          WebAddress.findByIdAndUpdate(result._id, { "$push": { "banner": newBanner._id }}, { "new": true, "upsert": true },
            function (err, updatedWebAddress) {
              if (err) {
                res.send(err)
              } else {
                res.send(updatedWebAddress);
              }
            }
          );
        }
      });
    })
  }
})

/* Retrieve banner*/
router.get('/', (req, res) => {
console.log('hello')
  WebAddress.find({}, function(err, results:any) {
  //  console.log(results)
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
