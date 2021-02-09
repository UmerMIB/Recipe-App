import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';

const routes = [
	{
		Component: Recipe,
		key: 'Recipe',
		path: '/recipe/:id'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
