import axios from 'axios';

export default function setupApi() {
    let baseUrl: string = 'https://api.esistem.com.br:5100';
    const api = axios.create({
        baseURL: baseUrl
    });

    api.interceptors.request.use(
        (config) => {
            let token;
            token = localStorage.getItem('SyncToken');

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => {
            if (response.status === 200 || response.status === 201) {
                //toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Operação realizada com sucesso', life: 3000 });
            }
            return response;
        },
        (error) => {
            let message = null;
            if (axios.isCancel(error)) {
                return Promise.reject(error);
            }

            switch (error.response?.status) {
                case 0:
                    message = 'A API está offline! Não será possível prosseguir.';
                    break;
                case 400:
                    message = 'Houve um erro na requisição';
                case 401:
                    message = 'Usuário ou senha inválidos.';
                    localStorage.removeItem('Token');
                    sessionStorage.removeItem('Token');
                    break;
                case 404:
                    message = 'Erro 404. Recurso não encontrado!';
                    break;
                case 415:
                    message = 'Falha no objeto de request.';
                    break;
                default:
                    message = 'Houve um erro desconhecido na requisição.';
                    break;
            }
            return Promise.reject(error);
        }
    );

    return api;
}
