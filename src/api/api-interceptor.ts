 // custom-instance.ts
 
 import Axios, { AxiosRequestConfig } from 'axios';
 
 export const AXIOS_INSTANCE = Axios.create({ baseURL: 'https://api.esistem.com.br:5100/' }); // use your own URL here or environment variable
 

 AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('SyncToken'); // Obtenha o token do localStorage
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Rejeita o erro se algo der errado
  }
);

 // add a second `options` argument here if you want to pass extra options to each generated query
 export const customInstance = <T>(
   config: AxiosRequestConfig,
   options?: AxiosRequestConfig,
 ): Promise<T> => {
   const source = Axios.CancelToken.source();
   const promise = AXIOS_INSTANCE({
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
 