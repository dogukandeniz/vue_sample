import { useToast } from 'vue-toastification';

const toast = useToast();

let _axiosObject = null;

export const setAxios = axiosObject => {
  _axiosObject = axiosObject;
};

export const setResponseInterceptor = () => {
  _axiosObject.interceptors.response.use(
    response => response,
    ({ response }) => {
      switch (response.status) {
        case 5003:
          break;
        case 401:
          toast.error(response.data.message, {
            timeout: 2000,
          });
          break;
        case 404:
          toast.error(response.data.message, {
            timeout: 2000,
          });
          break;
        case 400:
          toast.error(response.data.message, {
            timeout: 2000,
          });
          break;
        default:
          toast.error(response.data.message, {
            timeout: 2000,
          });
          break;
      }
      return Promise.reject(response.data.message,);
    }
  );
};
