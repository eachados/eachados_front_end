import React from "react";
import { useNavigate } from "react-router-dom";
import { Title, Text } from "../../atoms";
import { ISmallCardProps } from "./interface";
import styles from "./style.module.scss";

const SmallCard: React.FC<ISmallCardProps> = ({
  image,
  title,
  subtitle,
  id,
}) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate("/object-details", { state: { id } });
  };

  return (
    <div className={styles.container} onClick={handlePress}>
      <img className={styles.image} src={image} />
      <Title children={title} style={{ margin: 0 }} />
      {subtitle ? <Text children={subtitle} style={{ margin: 0 }} /> : null}
    </div>
  );
};

export default SmallCard;
