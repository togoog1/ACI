"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var banner_1 = require("../models/banner");
router.get('/', function (req, res) {
    console.log('hello');
    banner_1.default.find({}, function (err, results) {
        console.log(results);
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
