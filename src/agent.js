/* eslint-disable no-nested-ternary */
import axios from 'axios';


const API_ROOT =  'https://api.yavtechnology.com/api';
    
axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 100 * 1000;
axios.defaults.headers = {};


const setToken = (token) => {
	axios.defaults.headers.common = { token };
};
const getToken = () => {
	return axios.defaults.headers.common;
};
const responseBody = (response) => response;

const requests = {
	delete: (url, data) => axios.delete(`${url}`, { data }).then(responseBody),
	get: (url) => axios.get(`${url}`).then(responseBody),
	// getAndPushToUrl: url => superagent.get(`${url}`).use(tokenPlugin).then(responseBody),
	getPaginated: (url, pageNum) => axios
		.get(`${url}`)
		.set('page_num', pageNum)
		.then(responseBody),
	put: (url, body) => axios.put(`${url}`, body).then(responseBody),
	post: (url, body) => axios.post(`${url}`, body).then(responseBody),
	postFile: (url, data) => {
		const formData = new FormData();
		data.forEach((d) => {
			formData.append(d.key, d.file);
		});

		return axios
			.post(`${url}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(responseBody);
	},
};

const TalkToMentor = {
	sendDetails: (data) => requests.post('/contact/',data)
};

export default {
	setToken,
	requests,
	getToken,
	TalkToMentor,
};
