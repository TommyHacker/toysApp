/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import IndexPage from './index';

describe('testing the app', () => {
	beforeEach(() => {
		render(<IndexPage />);
	});
	test('should have an h1', async () => {
		const h1 = screen.getByRole('heading');
		expect(h1.textContent).toBe('IndexPage');
	});
});
