import React from "react";
import { Button, Title } from "../../components/atoms";

const Splash: React.FC = () => {
  return (
    <div>
      <h1>SPLASH</h1>
      <Title>SPLASH</Title>
      <Button
        children="Teste"
        onClick={() => console.log("[ON CLICK BUTTON] - Teste")}
      />
    </div>
  );
};

export { Splash };
