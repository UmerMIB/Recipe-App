import React, { useState } from 'react';
import { recipes as dummyData } from '../../dummyData';
import Form from '../../Components/Form';
import Recipes from './Recipes';

export default function App() {
	const [recipes, setRecipies] = useState(dummyData);

	const getRecipe = () => {};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Recipe Search</h1>
			</header>

			<Form getRecipe={getRecipe} />
			<Recipes recipes={recipes} />
		</div>
	);
}
