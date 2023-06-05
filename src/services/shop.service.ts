import axios, { AxiosResponse } from 'axios';
import { Shop } from '../types';

// const URI = 'http://localhost:4444'; // used local with db.json
const URI = 'https://delivery-app-7724.onrender.com'; // deploy api to render

const ShopService = () => {
  const getItems = async (): Promise<Shop[]> => {
    try {
      const { data }: AxiosResponse<Shop[]> = await axios.get(`${URI}/shops`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateOrder = async (body: any) => {
    try {
      const { data } = await axios.put(`${URI}/order`, { body });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { getItems, updateOrder };
};

export default ShopService;
