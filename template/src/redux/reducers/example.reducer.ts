import { AnyAction } from 'redux';

const initialState: IExampleState = {
	timepstamp: 0
};

const exampleReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default exampleReducer;

export interface IExampleState {
	timepstamp: number
}
