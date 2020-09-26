import React, { Component } from "react";
import { TileLayer, Map, Marker, Popup } from "react-leaflet";
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
  render() {
    let position = [0, 0];
    let marker;

    if (
      this.props.devices[0] &&
      this.props.devices[0].geoPosition.coordinates.latitude &&
      this.props.devices[0].geoPosition.coordinates.longitude
    ) {
      position = [
        this.props.devices[0].geoPosition.coordinates.latitude,
        this.props.devices[0].geoPosition.coordinates.longitude,
      ];

      marker = this.props.devices.map((device) => {
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
}
