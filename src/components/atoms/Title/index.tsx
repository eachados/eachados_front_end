import React from "react";
import { ITitleProps } from "./interface";
import styles from "./style.module.scss";

const Title: React.FC<ITitleProps> = ({ ...rest }) => {
  return <h1 {...rest} className={styles.title} />;
};

export default Title;
