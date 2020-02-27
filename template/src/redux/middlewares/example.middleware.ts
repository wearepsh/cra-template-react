import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';

const exampleMiddleware: Middleware<Dispatch> = (api: MiddlewareAPI) => next => (action: AnyAction) => {
	next(action);
	api.getState(); //this returns the app state
	switch (action.type) {
		default:
	}
};

export default exampleMiddleware;
