//DeviceList.js

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema
var DeviceList = new Schema({
  deviceName: {
    type: String
  },
  deviceType: {
    type: String
  },
  sensorName: {
    type: String
  },
  sensorType: {
    type: String
  },
  sensorValue: {
    type: Number
  }
});

module.exports = mongoose.model("DeviceList", DeviceList);
