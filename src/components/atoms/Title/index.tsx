import React from "react";
import { ITitleProps } from "./interface";
import styles from "./style.module.scss";

const Title: React.FC<ITitleProps> = ({ children }) => {
  return <h1 {...{ children }} className={styles.title} />;
};

export default Title;
