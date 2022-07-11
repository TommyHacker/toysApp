/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('testing the Navbar', () => {
	beforeEach(async () => {
		screen.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
	});
	test('should redirect on navigation link', async () => {
		const savedBtn = screen.getByText('Saved');
		await userEvent.click(savedBtn);
		const h1 = screen.getByRole('heading');
		expect(h1.textContent).toBe('Saved');
	});
	// test('should be on homepage after beforeEach from jest ', () => {
	// 	const h1 = screen.getByRole('heading');
	// 	expect(h1.textContent).toBe('indexpage');
	// });
});
