import React from 'react';
import Calendar from 'react-calendar';
import BottomNav from '../layout/BottomNav';

export default function History() {
	return (
		<div className="px-4 pb-32">
			<h1 className="text-lg font-bold text-primary-900 pt-4 mb-4 text-center pb-3 border-b-2 border-gray-300">
				History
			</h1>
			<div className="flex justify-center ">
				<Calendar />
			</div>
			<div className="mt-4">
				<div className="px-4 py-6 rounded bg-primary-900 text-white shadow ">
					<h3 className="font-semibold capitalize">Routine Name</h3>
					<p className="font-light">Workout Info</p>
				</div>
			</div>
			<BottomNav />
		</div>
	);
}
