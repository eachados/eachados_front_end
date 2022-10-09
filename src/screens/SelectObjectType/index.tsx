import React from "react";
import { SmallCardList } from "../../components/organisms";
import { Header } from "../../components/molecules";
import { IMAGES } from "../../constants/images";
import styles from "./style.module.scss";

const SelectObjectType: React.FC = () => {
  return (
    <div className={styles.screen}>
      <Header
        onGoBack={() => console.log("clicou")}
        title="Objeto Perdido"
        subtitle="Responda algumas perguntas sobre o objeto que você perdeu para que possamos cadastrá-lo em nossa base"
      ></Header>
      <SmallCardList
        title="Qual o tipo do objeto?"
        items={[
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
          {
            image: IMAGES.cup,
            title: "Garrafinha",
            subtitle: "copos, canecas",
          },
        ]}
      />
    </div>
  );
};

export { SelectObjectType };
