"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var leaderboard_1 = require("../models/leaderboard");
var leaderboard_2 = require("../models/leaderboard");
router.post('/', function (req, res) {
    if (req.body._id) {
        leaderboard_2.default.findByIdAndUpdate(req.body._id, { "$set": { "WebAddress": req.body.WebAddress } }, { "new": true, "upsert": true }, function (err, updatedWebAddress) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updatedWebAddress);
            }
        });
    }
    else {
        var leaderboard = new leaderboard_2.default();
        leaderboard.WebAddress = req.body.WebAddress;
        leaderboard.save(function (err, newLeaderboard) {
            leaderboard_1.default.findOne({ name: req.body.WebAddress }).exec(function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    leaderboard_1.default.findByIdAndUpdate(result._id, { "$push": { "Leaderboard": newLeaderboard._id } }, { "new": true, "upsert": true }, function (err, updatedWebAddress) {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send(updatedWebAddress);
                        }
                    });
                }
            });
        });
    }
});
router.get('/', function (req, res) {
    console.log('hello');
    leaderboard_1.default.find({}, function (err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            res.send(results[0]);
        }
    });
});
exports.default = router;
