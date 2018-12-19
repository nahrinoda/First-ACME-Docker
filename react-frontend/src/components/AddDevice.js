import React, { Component } from "react";
import DeviceService from "./DeviceService";

export default class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devicenName: "",
      deviceType: "",
      sensorName: "",
      sensorType: "",
      sensorValue: ""
    };

    this.deviceService = new DeviceService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.deviceService.add(
      this.state.deviceName,
      this.state.deviceType,
      this.state.sensorName,
      this.state.sensorType,
      this.state.sensorValue,
      () => {
        this.props.history.push("/");
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      deviceName: event.target.deviceName,
      deviceType: event.target.deviceType,
      sensorName: event.target.sensorName,
      sensorType: event.target.sensorType,
      sensorValue: event.target.sensorValue
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">Add Device</div>
            <div className="panel-body">
              <p>Device Name</p>
              <input
                type="text"
                value={this.state.deviceName}
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p>Device Type</p>
              <input
                type="text"
                value={this.state.deviceType}
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p>Sensor Name</p>
              <input
                type="text"
                value={this.state.sensorName}
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p>Sensor Type</p>
              <input
                type="text"
                value={this.state.sensorType}
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p>Sensor Value</p>
              <input
                type="text"
                value={this.state.sensorValue}
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
            </div>
            <div className="panel-footer">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
