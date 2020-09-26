import React, { Component } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Header from "../header/header";
import DeviceTableNew from "../deviceTable/deviceTable";
import Map from "../map/map";

import * as axios from "axios";

import styles from "./deviceView.module.css";

export class DeviceView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.view}>
          <Tabs defaultActiveKey="map">
            <Tab eventKey="map" title="Map">
              <div className={styles.tile}>
                <Map devices={this.state.devices} />
              </div>
            </Tab>
            <Tab eventKey="table" title="Table">
              <div className={styles.tile}>
                <div className={styles.grid}>
                  <DeviceTableNew devices={this.state.devices} />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

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

export default DeviceView;
