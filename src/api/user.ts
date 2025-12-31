import axios from '@/utils/axios';
import type { AxiosPromise } from 'axios';

type Login = { account: string; password: string };

/**
 * @description 登录
 * @param { Object } params
 * @param { string } params.account - 账户
 * @param { string } params.password - 密码
 */
export const login = ({ account, password }: Login): AxiosPromise => {
  const data = { account, password };

  return axios.request({
    url: '/login',
    method: 'post',
    data,
  });
};

/**
 * @description 登出
 */
export const logout = (): AxiosPromise => {
  return axios.request({
    url: '/logout',
    method: 'get',
  });
};
