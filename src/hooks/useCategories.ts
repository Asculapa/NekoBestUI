import axios from "axios";

export interface Category {
  name: string;
  format: string;
}

export const useCategories = () => {
  return axios.get("https://nekos.best/api/v2/endpoints");
};
