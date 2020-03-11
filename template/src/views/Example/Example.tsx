import React from 'react';
import ExampleComponent from '../../components/Example/Example'

type ExampleProps = {
 	timepstamp: number,
 	exampleAction: (timepstamp: number) => void;
};

function Example(props: ExampleProps) {
	return (
		<div>
			Example View
			<ExampleComponent />
		</div>
	);
}

export default Example;
