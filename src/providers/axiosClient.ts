import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


// axiosClient.interceptors.request.use(
//     async (config) => {
//         const token = "";
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             window.location.href = "/auth";
//         }
//         return Promise.reject(error);
//     },
// );

export default axiosClient;