import React from "react";

import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={styles.header}>IoT Device Registry</h1>
    </div>
  );
}
