import React from "react";
import { Button, Title, Subtitle } from "../../components/atoms";
import { COLORS } from "../../constants/colors/colors";
import styles from "./style.module.scss";

const Splash: React.FC = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <img
          src={require("../../assets/images/splash_image.png")}
          className={styles.image}
        />

        <Subtitle style={{ color: COLORS.white, margin: 0 }}>
          Perdeu algo?
        </Subtitle>

        <Title style={{ color: COLORS.white, margin: 0 }}>EACH aqui!</Title>

        <Button
          children="Teste"
          onClick={() => console.log("[ON CLICK BUTTON] - Teste")}
        />
      </div>
    </div>
  );
};

export { Splash };
