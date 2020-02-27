import { bindActionCreators } from 'redux';

function bindActionsToDispatch(obj, dispatch) {
	const bindedActions = {
		actions:{}
	};
	Object.keys(obj).forEach(function(key) {
		bindedActions.actions[key] = bindActionCreators(obj[key], dispatch);
	});
	return bindedActions;
}

export default bindActionsToDispatch;
