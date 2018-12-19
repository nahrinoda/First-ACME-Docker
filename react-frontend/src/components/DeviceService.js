import axios from "axios";

export default class DeviceService {
  all(callback) {
    axios
      .get("http://192.168.99.100:6200/device")
      .then(response => {
        callback(response.data);
      })
      .catch(function(error) {
        console.log(error);
        callback(null);
      });
  }

  get(id, callback) {
    axios
      .get("http://192.168.99.100:6200/device/" + id)
      .then(response => {
        callback(response.data);
      })
      .catch(function(error) {
        console.log(error);
        callback(null);
      });
  }

  add(data, callback) {
    axios
      .post("http://192.168.99.100:6200/device/add/", {
        deviceName: data,
        deviceType: data,
        sensorName: data,
        sensorType: data,
        sensorValue: data
      })
      .then(function(response) {
        console.log(response);
        callback();
      })
      .catch(function(error) {
        console.log(error);
        callback();
      });
  }

  update(data, id, callback) {
    axios
      .post("http://192.168.99.100:6200/device/update/" + id, {
        deviceName: data,
        deviceType: data,
        sensorName: data,
        sensorType: data,
        sensorValue: data
      })
      .then(function(response) {
        console.log("Updated");
        callback();
      })
      .catch(function(response) {
        callback();
      });
  }

  delete(id, callback) {
    axios
      .get("http://192.168.99.100:6200/device/delete/" + id)
      .then(function(response) {
        callback();
      })
      .catch(function(response) {
        console.log("Error deleting");
        callback();
      });
  }
}
