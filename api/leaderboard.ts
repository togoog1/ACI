import express = require('express');
let router = express.Router();
import WebAddress from '../models/leaderboard';
import Leaderboard from '../models/leaderboard';




/* Create new Leaderboard and update*/
router.post('/', (req, res) => {
  if(req.body._id) {
    Leaderboard.findByIdAndUpdate(req.body._id, { "$set": {"WebAddress": req.body.WebAddress }}, { "new": true, "upsert": true },
      function (err, updatedWebAddress) {
        if (err) {
          res.send(err)
        } else {
          res.send(updatedWebAddress);
        }
      }
    );
  } else {
    let leaderboard:any = new Leaderboard();
    leaderboard.WebAddress = req.body.WebAddress;
    leaderboard.save((err, newLeaderboard) => {
      WebAddress.findOne({name: req.body.WebAddress}).exec((err, result:any) => {
        if (err) {
          res.send(err)
        } else {
          WebAddress.findByIdAndUpdate(result._id, { "$push": { "Leaderboard": newLeaderboard._id }}, { "new": true, "upsert": true },
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

/* Retrieve Leaderboard*/
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
