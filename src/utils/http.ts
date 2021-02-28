import qs from 'qs';
import * as auth from '@/auth/auth-provider';
import { useAuth } from '@/context/app-context';
const baseUrl = process.env.REACT_APP_BASE_URL;

interface IConfig extends RequestInit {
    token?: string;
    data?: object;
}

export const http = async (path: string, { data, token, headers, ...customConfig }: IConfig = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : '',
        },
        ...customConfig,
    };
    if (config.method.toUpperCase() === 'GET') {
        path += `?${qs.stringify(data)}`;
    } else {
        config.body = JSON.stringify(data || {});
    }
    return fetch(`${baseUrl}${path}`, config).then(async (res) => {
        if (res.status === 401) {
            await auth.logout();
            window.location.reload();
            return Promise.reject({ message: '请重新登录' });
        }
        // res.json() 是res的一个方法，该方法返回一个promise
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            return Promise.reject(data);
        }
    });
};
export const useHttp = () => {
    const { user } = useAuth();
    return (...[path, config]: Parameters<typeof http>) => http(path, { ...config, token: user?.token });
};

// export default useHttp;
