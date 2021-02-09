import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const App = props => {
	return (
		<Router>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={props => <Component page={key} {...props} />}
						exact
					/>
				))}
			</Switch>
		</Router>
	);
};

export default App;
