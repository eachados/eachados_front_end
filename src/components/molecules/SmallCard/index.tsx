import React from "react";
import { Title, Text, Subtitle } from "../../atoms";
import { ISmallCardProps } from "./interface";
import styles from "./style.module.scss";

const SmallCard: React.FC<ISmallCardProps> = ({
  image,
  title,
  subtitle = "Default",
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <Title children={title} style={{ margin: 0 }} />
      <Text children={subtitle} style={{ margin: 0 }} />
    </div>
  );
};

export default SmallCard;
