import http from './request'

export const getUserInfo = () => http.get('/user/info');

export const getLoginUrl =()=>http.get('/wechat/loginul')

