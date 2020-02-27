import React from 'react';
import { connect } from 'react-redux';
import bindActionsToDispatch from '../helpers/bindActionsToDispatch';
import exampleSelector from '../redux/selectors/example/example.selector';
import exampleActions from '../redux/actions/example.actions';

import ExampleView from '../views/Example/Example';

function Example() {
	return (
		<ExampleView
			// exampleAction={this.props.actions.exampleAction}
			// example={this.props.example}
		/>
	)
}

function mapStateToProps(state: any, props: any) { //FIX THIS
	return exampleSelector(state);
}

function mapDispatchToProps(dispatch: any) {
	return bindActionsToDispatch(
		{
			exampleAction: exampleActions.exampleAction,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
