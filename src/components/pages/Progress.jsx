import React, { useState } from 'react';
import BottomNav from '../layout/BottomNav';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Progress() {
	const [chosenExercise, setChosenExercise] = useState('null');
	const data = [
		{ name: 'Date A', value: 100 },
		{ name: 'Date B', value: 200 },
		{ name: 'Date C', value: 400 },
	];

	const handleChange = e => {
		setChosenExercise(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div className="px-4 pb-32">
			<h1 className="text-lg font-bold text-primary-900 pt-4 mb-4 text-center pb-3 border-b-2 border-gray-300">
				Progress
			</h1>
			<div className="flex justify-between">
				<label htmlFor="choose_exercise">Choose an exercise:</label>
				<select
					className="bg-white text-primary-900 text-light px-2 py-1 border-2 border-primary-900"
					onChange={handleChange}
				>
					<option value="null">Choose an exercise</option>
					<option value="bench press">Bench Press</option>
				</select>
			</div>
			<div className="mt-8">
				{chosenExercise !== 'null' ? (
					<LineChart width={320} height={300} data={data}>
						<Line type="monotone" dataKey="value" stroke="#121223" />
						<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<XAxis dataKey="name" />
						<YAxis />
					</LineChart>
				) : (
					''
				)}
			</div>
			<BottomNav />
		</div>
	);
}
