/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './index';

describe('testing the Navbar', () => {
	beforeEach(() => {
		render(
			<Router>
				<Navbar />
			</Router>
		);
	});
	test('should have some links', () => {
		const links = screen.getAllByRole('link');
		expect(links.length).toBe(3);
	});
	test('should have a home button', () => {
		const links = screen.queryAllByRole('link');
		expect(links[0].textContent).toBe('Home');
		expect(links[1].textContent).toBe('Catalogue');
		expect(links[2].textContent).toBe('Saved');
	});
});
