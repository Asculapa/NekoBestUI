import axios from "axios";
import { ImagesQuery } from "../App";

export const useImages = (imagesQuery: ImagesQuery, amount: number) => {
  return axios.get("https://nekos.best/api/v2/" + imagesQuery.category.name, {
    params: {
      amount: amount,
    },
  });
};
