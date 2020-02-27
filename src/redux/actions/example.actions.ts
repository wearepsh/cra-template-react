import actionTypes from './actionTypes';

interface IExampleAction {
    type: typeof actionTypes.EXAMPLE_ACTION_TYPE,
    meta: {
        timestamp: number,
    }
}

const exampleActions = {
	exampleAction:(timestamp: number) : IExampleAction => ({
		type: actionTypes.EXAMPLE_ACTION_TYPE,
		meta: {
			timestamp,
		}
	})
};


export default exampleActions;
