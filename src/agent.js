import axios from 'axios';

// import { RECORD_LIMIT } from './constants/pagination';

const API_ROOT = process.env.NODE_ENV === 'production' ? 'https://www.extremist.team' : 'https://www.extremist.team'; // 104.215.141.154     127.0.0.1

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 4000;

const setToken = (token) => {
  //  console.log(token);
  axios.defaults.headers.common = { Token: token ,"Set-Cookie": "HttpOnly;Secure;SameSite=None"};
};
const responseBody = (response) => {
  //  console.debug('RESPONSE', response);
  return response;
};

const requests = {
  del: (url) => axios.del(`${url}`).then(responseBody),
  get: (url) => axios.get(`${url}`).then(responseBody),
  // getAndPushToUrl: url => superagent.get(`${url}`).use(tokenPlugin).then(responseBody),
  getPaginated: (url, pageNum) => axios
    .get(`${url}`)
    .set('page_num', pageNum)
    .then(responseBody),
  put: (url, body) => axios.put(`${url}`, body).then(responseBody),
  post: (url, body) => axios.post(`${url}`, body).then(responseBody),
  postFile: (url, key, file) => {
    const formData = new FormData();
    formData.append(key, file);
    return axios
      .post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(responseBody);
  },
};

const Auth = {
  confirmEmail:(email) => requests.post('/demo/confirm-email/',email),
  login: (username, password) => requests.post('/user/login/', { email: username, password }),
  logout: () => requests.post('/logout/'),
  register: (data) => requests.post('/demo/register/', data),
  verify_otp: (otp, phone) => requests.post('/user/verify/', { otp, phone }),
  save: (user) => requests.put('/user', { user }),
  send_otp: (phone) => requests.post('/otp/send/', { phone }),

};

export default {
  Auth,
  setToken,
 
  requests,


};
