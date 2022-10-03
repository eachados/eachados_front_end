import React from "react";
import { ISubtitleProps } from "./interface";
import styles from "./style.module.scss";

const Title: React.FC<ISubtitleProps> = ({ ...rest }) => {
  return <h2 {...rest} className={styles.title} />;
};

export default Title;
