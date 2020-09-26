import React from "react";

import DeviceListItem from "../deviceListItem/deviceListItem";

function DeviceTable({ devices }) {
  return devices.map((device) => (
    <DeviceListItem device={device} key={device.uuid} />
  ));
}

export default DeviceTable;
