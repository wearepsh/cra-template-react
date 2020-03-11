import axios from 'axios';
import configs from '../configs/configs';

const API = axios.create({
	baseURL: configs.API_BASE_URI,
});

function formatData(params: Record<string, any>) {
	const data = new FormData();
	Object.keys(params).forEach((param: string) => {
		data.append(param, params[param]);
	});
	return data;
}

const defaultErrorResponse = { code: -1, message: 'Unknown error' };

async function post(url: string, params: object) {
	let responseData = { code: 0, message: ''};
	try {
		const data = formatData(params);
		const response = await API.post(url, data);
		responseData = response.data || defaultErrorResponse;
	} catch (error) {
		responseData = { code: -1, message: error };
	}

	if (responseData.code) {
		throw new Error(responseData.message);
	}

	return responseData;

}

export default API;

export {
	post
};
