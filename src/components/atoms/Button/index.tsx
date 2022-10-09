import React from "react";
import { IButtonProps } from "./interface";

import styles from "./styles.module.scss";

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <div className={styles.container} {...{ onClick }}>
      <p className={styles.label} {...{ children }} />
    </div>
  );
};

export default Button;
