import React, { Component } from "react";
import axios from "axios";
import DeviceService from "./DeviceService";

export default class UpdateDevice extends Component {
  constructor(props) {
    super(props);
    this.deviceService = new DeviceService();

    //bind the instance to each method
    // (So you can use the THIS statement. Otherwise, it will be null)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    //set the initial state
    this.state = {
      _id: "",
      name: "",
      type: "",
      sensorName: "",
      sensorType: "",
      sensorValue: ""
    };
  }

  componentDidMount() {
    //the parameter ID
    let id = this.props.match.params.id;
    var thisRef = this;
    this.deviceService.get(id, function(data) {
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    //updates the state only for this parameter
    //(_id stays the same)
    this.setState({
      name: event.target.value,
      type: event.target.value,
      sensorName: event.target.value,
      sensorType: event.target.value,
      sensorValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //Update in database
    this.deviceService.update(
      this.state.name,
      this.state.type,
      this.state.type,
      this.state.sensorName,
      this.state.sensorType,
      this.state.sensorValue,
      this.state._id,
      function() {
        thisRef.props.history.push("/");
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">Edit Device</div>
            <div className="panel-body">
              <p>Task description</p>
              <input type="hidden" value={this.state._id} />
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
              />
              <input
                type="text"
                value={this.state.type}
                onChange={this.handleChange}
                className="form-control"
              />
              <input
                type="text"
                value={this.state.sensorName}
                onChange={this.handleChange}
                className="form-control"
              />
              <input
                type="text"
                value={this.state.sensorType}
                onChange={this.handleChange}
                className="form-control"
              />
              <input
                type="text"
                value={this.state.sensorValue}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="panel-footer">
              <button type="submit" className="btn btn-primary">
                Update
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
