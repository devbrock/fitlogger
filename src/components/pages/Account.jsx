import React from 'react';
import app from '../../firebase.js';
import BottomNav from '../layout/BottomNav.jsx';

export default function Account({ history }) {
	const signOut = () => {
		app.auth().signOut();
		history.push('/login');
	};

	return (
		<div className="text-center py-24">
			<h1 className="text-lg font-bold text-primary-900">Account</h1>
			<h3 className="text-md text-primary-900">email</h3>
			<button
				onClick={signOut}
				className="bg-primary-900 mt-4 py-2 px-6 text-white rounded w-32 mx-auto"
			>
				Sign Out
			</button>
			<BottomNav />
		</div>
	);
}
