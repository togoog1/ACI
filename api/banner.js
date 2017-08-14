"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var banner_1 = require("../models/banner");
var banner_2 = require("../models/banner");
router.post('/', function (req, res) {
    if (req.body._id) {
        banner_2.default.findByIdAndUpdate(req.body._id, { "$set": { "WebAddress": req.body.Webaddress } }, { "new": true, "upsert": true }, function (err, updatedWebAddress) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updatedWebAddress);
            }
        });
    }
    else {
        var banner = new banner_2.default();
        banner.WebAddress = req.body.WebAddress;
        banner.save(function (err, newBanner) {
            banner_1.default.findOne({ name: req.body.WebAddress }).exec(function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    banner_1.default.findByIdAndUpdate(result._id, { "$push": { "banner": newBanner._id } }, { "new": true, "upsert": true }, function (err, updatedWebAddress) {
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
    banner_1.default.find({}, function (err, results) {
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
