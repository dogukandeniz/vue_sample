import { post } from '../api/HttpService';

export const order = async payload => {
  const requestArr = [];
  payload.forEach(el => {
    requestArr.push({ id: el.id, amount: el.count });
  });
  console.log('requestArr', requestArr);
  const response = await post(`/order`, requestArr);
  return response;
};
