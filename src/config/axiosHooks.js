import axios from 'axios';
import {getToken} from 'utils/cookiesHooks';
import {API_URL} from './api';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = 'Bearer token';

const axiosInterceptor = () => {
  axios.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
      if (getToken()) {
        config.headers.Authorization = `Bearer ${getToken()}`;
      }
    }
    return config;
  });
};

export const fetcher = async (url, config) => {
  let header = {
    ...config,
    url,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  };

  try {
    axiosInterceptor();
    let res = await axios.request(header);
    return res;
  } catch (err) {
    throw err?.response;
  }
};
