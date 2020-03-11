import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppState } from '../redux/reducers';
import exampleSelector from '../redux/selectors/example/example.selector';
import exampleActions from '../redux/actions/example.actions';

import ExampleView from '../views/Example/Example';

type ExampleProps = {
	exampleActions: {
		exampleAction: (timepstamp: number) => void;
	};
	timepstamp: number;
};

function Example(props: ExampleProps) {
	return (
		<ExampleView
			exampleAction={props.exampleActions.exampleAction}
			timepstamp={props.timepstamp}
		/>
	);
}

function mapStateToProps(state: IAppState) { //FIX THIS
	return exampleSelector(state);
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		exampleActions: bindActionCreators(exampleActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
