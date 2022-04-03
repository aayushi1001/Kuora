const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Report = require("../models/report");

router.get("/", (req, res, next) => {
  Report.find()
    .exec()
    .then((result) => {
      res.status(200).json({
        code: 200,
        message: "Report Successfully found",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json({
        code: 500,
        error: err,
      });
    });
});

module.exports = router;
