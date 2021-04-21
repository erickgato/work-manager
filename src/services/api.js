import axios from 'axios';

const api = axios.create({
    baseURL: '',
    timeout: 10000,
});

api.interceptors.request.use(
    async (config) => {
        if (!config.url.endsWith('login')) {
            // Configurar token para as rotas necessárias
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const endpoints = {
    categoryExample: {
        endpointExample: (data) => api.post('endpoint', data),
    },
};

export default { api, endpoints };
