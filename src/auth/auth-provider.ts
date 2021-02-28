//如果使用firebase这种第三方auth服务，不需要开发者再开发此文件
//这个组件主要做的是对得到的token进行存储和fetchcall方法
import { User } from '@/pages/project/SearchForm';

const key = '__auth_provider__token';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getToken = () => window.localStorage.getItem(key);

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(key, user.token || '');
    return user;
};

export const login = (data: { username: string; password: string }) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(async (res: Response) => {
        if (res.ok) {
            return handleUserResponse(await res.json());
        } else {
            return Promise.reject(data);
        }
    });
};

export const register = (data: { username: string; password: string }) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(async (res: Response) => {
        if (res.ok) {
            return handleUserResponse(await res.json());
        } else {
            return Promise.reject(data);
        }
    });
};

// 加async使他返回promise
export const logout = async () => window.localStorage.removeItem(key);
