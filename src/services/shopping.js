import { get } from '../api/HttpService';

export const getShoppingList = async () => {
  const response = await get(`/listing`);
  return response;
};