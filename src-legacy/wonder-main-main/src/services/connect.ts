import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_ENDPOINTS } from './endpoints';
import axiosRetry from 'axios-retry';
// import { refreshAccessToken } from './auth/auth';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  next?: {
    revalidate: number;
  };
}

const TIME_VALIDATE: number = 60 * 60 * 24 * 1;

export const connect = axios.create({
  baseURL: API_ENDPOINTS.WOUNDER_ROOT,
  timeout: 130000,
});

connect.interceptors.request.use((config: CustomAxiosRequestConfig) => {
  const token =
    typeof window !== 'undefined' && localStorage.getItem('accessToken');
  const refresh =
    typeof window !== 'undefined' && localStorage.getItem('refreshToken');

  if (config.headers['X-Enable-Cache']) {
    config.next = { revalidate: TIME_VALIDATE};
    delete config.headers['X-Enable-Cache']; 
  }

  if (
    token &&
    refresh &&
    refresh.toString().length > 0 &&
    refresh !== 'undefined'
  ) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosRetry(connect, {
  retries: 1,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  shouldResetTimeout: true,
  retryCondition: async (error: AxiosError) => {
    const refresh =
      typeof window !== 'undefined' && localStorage.getItem('refreshToken');
    const isRefresh = !!(
      refresh &&
      refresh.toString().length > 0 &&
      refresh !== 'undefined'
    );
    return error?.response?.status === 401 && isRefresh;
  },
  // onRetry: async (_, error) => {
  //   if (error.config && error.response?.status === 401) {
  //     const { access } = await refreshAccessToken();
  //     error.config.headers['Authorization'] = `Bearer ${access}`;
  //   }
  //   return axiosRetry.isNetworkOrIdempotentRequestError(error);
  // },
});
