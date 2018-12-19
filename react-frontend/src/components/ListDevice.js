import React, { Component } from 'react';
import DeviceService from './DeviceService';
import axios from 'axios';
import ListDeviceRow from './ListDeviceRow';

export default class IndexDevuce extends Component {

  constructor(props) {
      super(props);
      this.state = {devices: ''};
      this.deviceService = new DeviceService();

      //bind
      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
    componentWillMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.deviceService.all((data)=>{
          thisRef.setState({ devices: data });
      })
    }

    tabRow(){
      if(this.state.devices instanceof Array){

        var thisRef = this;
        return this.state.devices.map(function(object, i){
            return <ListDeviceRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
    }

    onDelete(event) {
      let id = event.target.id;
      var thisRef = this;
      this.deviceService.delete(id,()=>{
        thisRef.fillData();
      });
    }

    onUpdate(event) {
      let id = event.target.id;
      this.props.history.push('/update/'+id);
    }

    handleAdd() {
      this.props.history.push('/add');
    }

    render() {
      return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">List of Devices</div>
            <div className="panel-body">
            <p>Click on the device description to edit</p>
              <table id="todo-list" className="table table-bordered">
                <tbody>
                  {this.tabRow()}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <button onClick={this.handleAdd} className="btn btn-info">New device</button>
            </div>
          </div>
        </div>
      );
    }
  }