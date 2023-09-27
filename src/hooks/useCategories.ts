import axios from "axios";

export interface Category {
  name: string;
  format: string;
  amount: number;
}

export const useCategories = () => {
  return axios.get("https://nekos.best/api/v2/endpoints");
};
