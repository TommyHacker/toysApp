import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/Catalogue'>Catalogue</Link>
			<Link to='/Saved'>Saved</Link>
		</nav>
	);
}
