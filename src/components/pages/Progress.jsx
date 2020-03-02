import React from 'react';
import BottomNav from '../layout/BottomNav';

export default function Progress() {
	return (
		<div className="px-4 pb-32">
			<h1 className="text-lg font-bold text-primary-900 pt-4 mb-4 text-center pb-3 border-b-2 border-gray-300">
				Progress
			</h1>
			<div className="flex justify-between">
				<label htmlFor="choose_exercise">Choose an exercise:</label>
				<select className="bg-white text-primary-900 text-light px-2 py-1 border-2 border-primary-900">
					<option className="">Bench Press</option>
				</select>
			</div>
			<BottomNav />
		</div>
	);
}
