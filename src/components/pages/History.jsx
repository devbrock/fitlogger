import React from 'react';
import Calendar from 'react-calendar';
import BottomNav from '../layout/BottomNav';

export default function History() {
	return (
		<div className="px-4 pb-32">
			<h1 className="text-lg font-bold text-primary-900 pt-4 mb-4 text-center">
				History
			</h1>
			<div className="flex justify-center">
				<Calendar />
			</div>
			<div className="mt-4">
				<div className="px-4 py-6 rounded bg-white shadow ">
					Workout Info Here
				</div>
			</div>
			<BottomNav />
		</div>
	);
}
