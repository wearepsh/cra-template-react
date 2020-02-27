import { call, takeLatest, all, put, select } from 'redux-saga/effects';

// import rewardsService from '../../services/rewards.service';
import actionTypes from '../actions/actionTypes';
import exampleActions from '../actions/example.actions';
import exampleSelector from '../selectors/example/example.selector';

import localize from '../../helpers/translator/localize';

function *example() {
	try {
		const example = yield select(exampleSelector);
		// yield call(rewardsService.saveRewardsInfo,
		// 	rewards.sku,
		// 	rewards.code,
		// 	rewards.store,
		// 	rewards.userInfo.email,
		// 	rewards.userInfo.firstName,
		// 	rewards.userInfo.lastName,
		// 	rewards.userInfo.age,
		// 	rewards.userInfo.gender
		// );
		yield put(exampleActions.exampleAction(0));
	} catch (err) {

	}
}

export default all([
	takeLatest(actionTypes.EXAMPLE_ACTION_TYPE, example),
]);
