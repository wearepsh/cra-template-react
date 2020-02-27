import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

import exampleMiddleware from './middlewares/example.middleware';

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	applyMiddleware(
		exampleMiddleware,
		sagaMiddleware
	)
);

sagaMiddleware.run(rootSaga);

export default store;
