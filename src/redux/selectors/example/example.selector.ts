import { createSelector } from 'reselect';
import { IAppState } from '../../reducers';

const getExampleData = (state: IAppState) => state.example;

const exampleSelector = createSelector(
	[ getExampleData ],
	exampleData => exampleData
);


export default exampleSelector;
