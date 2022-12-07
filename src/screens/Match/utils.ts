import { IObjectCardProps } from "../../components/molecules/ObjectCard/interface";
import { DummyObjetos } from "../../services/objeto/dummyData";

export const getAllObjects = (): IObjectCardProps[] => {
  return DummyObjetos.map((o) => ({
    object: o,
  }));
};
