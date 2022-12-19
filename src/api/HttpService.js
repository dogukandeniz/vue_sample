import axios from 'axios';
import { setAxios, setResponseInterceptor } from './Interceptor';

let _instance = null;

export const setOptions = options => {
  _instance = axios.create({
    baseURL: options.url,
  });
  setAxios(_instance);
  setResponseInterceptor();
};

export const get = async (url, config = {}) => {
  const { data } = await _instance.get(url, config);
  return data;
};

export const put = async (url, payload, config = {}) => {
  const { data } = await _instance.put(url, payload, config);
  return data;
};

export const post = async (url, payload, config = {}) => {
  const { data } = await _instance.post(url, payload, config);
  return data;
};

export const patch = async (url, payload, config) => {
  const { data } = await _instance.patch(url, payload, config);
  return data;
};
