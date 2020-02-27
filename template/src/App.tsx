import React from 'react';
import {
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Example from './containers/Example';

export default function App() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

function Home() {
	return (
    <>
      <h2>Home</h2>
      <Example />
    </>
  );
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

