import axios from "axios";
import { ImagesQuery } from "../App";

export const useImages = (imagesQuery: ImagesQuery, amount: number) => {
  if (imagesQuery.query)
    return axios.get("https://nekos.best/api/v2/search", {
      params: {
        query: imagesQuery.query,
        type: imagesQuery.category.format,
        category: imagesQuery.category.name,
        amount: amount,
      },
    });

  return axios.get("https://nekos.best/api/v2/" + imagesQuery.category.name, {
    params: {
      amount: amount,
    },
  });
};
