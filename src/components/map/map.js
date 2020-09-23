import React, { Component } from "react";
import { TileLayer, Map, Marker, Popup } from "react-leaflet";
import * as axios from "axios";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";

// https://www.pexels.com/photo/police-blue-sky-security-surveillance-96612/
import img from "./pexels-photomix-company-96612.jpg";

//https://github.com/PaulLeCam/react-leaflet/issues/453
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: [],
    };
  }

  render() {
    let position = [0, 0];
    let marker;

    if (
      this.state.devices[0] &&
      this.state.devices[0].geoPosition.coordinates.latitude &&
      this.state.devices[0].geoPosition.coordinates.longitude
    ) {
      position = [
        this.state.devices[0].geoPosition.coordinates.latitude,
        this.state.devices[0].geoPosition.coordinates.longitude,
      ];

      marker = this.state.devices.map((device) => {
        const positionA = [
          device.geoPosition.coordinates.latitude,
          device.geoPosition.coordinates.longitude,
        ];

        return (
          <Marker position={positionA} key={device.uuid}>
            <Popup>
              <b>{device.identification.company}</b>
              <br />
              {device.identification.device}
              <br />
              <img src={img} alt="" className={styles.popupImage} />
            </Popup>
          </Marker>
        );
      });

      return (
        <Map center={position} zoom={15} className={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {marker}
        </Map>
      );
    } else {
      return <br />;
    }
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
