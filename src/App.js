import React from 'react';
import '../public/styles/css/main.css';
import Layout from './layouts';
import { Route, Routes } from 'react-router-dom';
import * as Pages from './pages';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Pages.IndexPage />} />
				<Route path='/saved' element={<Pages.SavedPage />} />
				<Route path='*' element={<Pages.NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
