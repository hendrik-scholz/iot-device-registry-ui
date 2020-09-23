import React, {Component} from 'react';
import DeviceListItem from '../deviceListItem/deviceListItem';
import * as axios from "axios";

class DeviceTable extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            devices: []
        }
    }

    render() {
        return this.state.devices.map(device => <DeviceListItem device={device} key={device.uuid}/>)
    }

    // TODO: move to device view
    componentDidMount() {
        axios
          .get("http://localhost:3000/devices")
          .then((res) => {
            this.setState({ devices: res.data });
          })
          .catch((error) => {
            console.log("Error:" + JSON.stringify(error));
          });
      }
}

export default DeviceTable;