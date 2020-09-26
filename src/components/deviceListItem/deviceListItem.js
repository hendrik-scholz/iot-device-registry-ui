import React from "react";
import styles from "./deviceListItem.module.css";

import img from "../map/pexels-photomix-company-96612.jpg";

function DeviceListItem({ device }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageColumn}>
        <img src={img} alt="" className={styles.image}></img>
      </div>
      <div className={styles.infoColumn}>
        <p className={styles.header}>{device.identification.device}</p>
        <p className={styles.text}>
          Company: {device.identification.company}
          <br></br>
          Authorization: {device.authorization.name},{" "}
          {device.authorization.role}
        </p>
      </div>
    </div>
  );
}

export default DeviceListItem;
