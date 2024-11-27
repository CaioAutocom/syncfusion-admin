 // custom-instance.ts
 
 import Axios, { AxiosRequestConfig } from 'axios';
 
 export const apiClient = Axios.create({ baseURL: 'https://api.esistem.com.br:5100/' }); 

 apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('SyncToken');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error); 
  }
);

 // add a second `options` argument here if you want to pass extra options to each generated query
 export const customInstance = <T>(
   config: AxiosRequestConfig,
   options?: AxiosRequestConfig,
 ): Promise<T> => {
   const source = Axios.CancelToken.source();
   const promise = apiClient({
     ...config,
     ...options,
     cancelToken: source.token,
   }).then(({ data }) => data);
 
   // @ts-ignore
   promise.cancel = () => {
     source.cancel('Query was cancelled');
   };
 
   return promise;
 };
 