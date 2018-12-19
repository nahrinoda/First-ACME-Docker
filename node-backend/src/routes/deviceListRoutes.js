var express = require("express");
var app = express();
var router = express.Router();

//Schema
var DeviceList = require("../models/DeviceList");

// Get Specific
router.route("/:id").get(function(req, res) {
  var id = req.params.id;
  DeviceList.findById(id, function(err, device) {
    res.json(device);
  });
});

// Get All devices
router.route("/").get(function(req, res) {
  DeviceList.find(function(err, devices) {
    if (err) {
      console.log(err);
    } else {
      res.json(devices);
    }
  });
});

// Add device
router.route("/add").post(function(req, res) {
  var device = new DeviceList(req.body);
  device
    .save()
    .then(device => {
      res.json("Added");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route("/update/:id").post(function(req, res) {
  DeviceList.findById(req.params.id, function(err, device) {
    if (!device) return next(new Error("Could not load Document"));
    else {
      device.deviceName = req.body.deviceName;
      device.dviceType = req.body.deviceType;
      device.sensorName = req.body.sensorName;
      device.sensorType = req.body.sensorType;
      device.sensorValue = req.body.sensorValue;

      device
        .save()
        .then(device => {
          res.json("Updated");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Delete Specific
router.route("/delete/:id").get(function(req, res) {
  DeviceList.findByIdAndRemove({ _id: req.params.id }, function(err, device) {
    if (err) res.json(err);
    else res.json("Deleted");
  });
});

module.exports = router;
