import { call, takeLatest, all, put, select } from 'redux-saga/effects';

import exampleServices from '../../services/example.service';
import actionTypes from '../actions/actionTypes';
import exampleActions from '../actions/example.actions';
import exampleSelector from '../selectors/example/example.selector';

function *example() {
	try {
		yield select(exampleSelector);
		yield call(exampleServices.exampleService,
			'param1',
			'param2'
		);
		yield put(exampleActions.exampleAction(0));
	} catch (err) {
	}
}

export default all([
	takeLatest(actionTypes.EXAMPLE_ACTION_TYPE, example),
]);
