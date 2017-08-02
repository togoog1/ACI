import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');
import User from '../models/user';
let router = express.Router();

router.post('/Register', (req, res) =>{
  let user:any = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function(err, newUser) {
    if(err) {
      console.log(err)
    } else {
      res.end
    }
  })
})

router.post('/Login/Local',(req, res, next) => {

 if(!req.body.username || !req.body.password){
   res.status(400);
 }
 passport.authenticate('local', function(err, user, info){
   if(err){
     res.status(400);
   }
   if(user){
     return res.json({token: user.generateJWT()});
   }
   return res.status(400)
 })(req, res, next);
});


export default router;
