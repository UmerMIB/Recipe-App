import React, { useEffect, useState } from 'react';
import Form from '../../Components/Form';
import Recipes from './Recipes';
import axios from 'axios';
import '../../scss/Pages/Home/index.scss';
import { toast, ToastContainer } from 'react-toastify';

export default function App() {
	const [recipes, setRecipies] = useState(null);
	const [ingredient, setIngredient] = useState('');
	const [temp, setTemp] = useState('');

	useEffect(() => {
		axios
			.get('/api')
			.then(res => {
				console.log('res', res.data);
				if (res.data.success) {
					setRecipies(res.data.data);
				}
			})
			.catch(err => {
				console.log('err', err.response.data);
				let error = err?.response?.data;
				error = !!error.error.message
					? error.error.message
					: !!error.message
					? error.message
					: '';
				toast.error(`Something went wrong ${error}`);
				setRecipies([]);
			});
	}, []);

	const handleOnchange = e => setIngredient(e.target.value);

	const getRecipe = e => {
		e.preventDefault();
		axios
			.get('api/search', {
				params: {
					ingredient: ingredient
				}
			})
			.then(res => {
				console.log('res', res.data.data);
				setRecipies([]);
				setRecipies(res.data.data);
				setTemp(Date.now());
			})
			.catch(err => {
				console.log('err', err.response.data);
				let error = err?.response?.data;
				error = !!error.error.message
					? error.error.message
					: !!error.message
					? error.message
					: '';
				toast.error(`Something went wrong ${error}`);
				setRecipies([]);
			});
	};

	const handleDeleteRecipe = recipe => {
		setRecipies(previousData => {
			let preData = previousData.filter(item => item._id !== recipe._id);
			return preData;
		});
	};

	return (
		<div className="RecipeSearch">
			<Form
				getRecipe={getRecipe}
				handleOnchange={handleOnchange}
				ingredient={ingredient}
			/>
			<Recipes
				recipes={recipes}
				handleDeleteRecipe={handleDeleteRecipe}
				temp={temp}
			/>
		</div>
	);
}
