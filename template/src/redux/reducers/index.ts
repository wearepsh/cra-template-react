import { combineReducers } from 'redux';
import exampleReducer, { IExampleState } from './example.reducer';

const rootReducer = combineReducers({
	example: exampleReducer,
});

export default rootReducer;

export interface IAppState {
	example: IExampleState,
}
