import axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

class HttpRequest {
  getInsideConfig(): AxiosRequestConfig {
    const config = {
      baseURL: import.meta.env.VITE_APP_BASE_API,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      withCredentials: true,
      timeout: 60000,
    };

    return config;
  }

  interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const language = localStorage.getItem('i18nextLng');
        if (language) {
          config.headers.language = language;
        }

        return Promise.resolve(config);
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.headers['content-type'].includes('application/json')
          ? response.data
          : response;

        return Promise.resolve(res);
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);

    return instance(options);
  }
}

const axiosInstance = new HttpRequest();

export default axiosInstance;
