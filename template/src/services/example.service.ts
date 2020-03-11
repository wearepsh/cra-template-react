import { post } from './api';

async function exampleService(param1: string, param2: string) {
	const data = {
		param1,
		param2
	};

	const response = await post('example/service', data);

	return response;
}

export default {
	exampleService,
};
