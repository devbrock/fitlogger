import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';
import Rectangle from '../../assets/svgs/SlantedRectangle.svg';
import { v4 as uuid } from 'uuid';
export default function Routines() {
	const routines = [
		{
			id: uuid(),
			title: 'routine 1',
			exercises: [
				{
					id: uuid(),
					name: 'bench press',
				},
				{
					id: uuid(),
					name: 'squats',
				},
			],
		},
	];

	return (
		<div
			className="pt-12 pb-32 px-4 bg-no-repeat bg-left-bottom min-h-screen"
			style={{ backgroundImage: `url(${Rectangle})`, backgroundSize: 'cover' }}
		>
			<div className="flex justify-between pb-3 border-b-2 border-gray-300 ">
				<h1 className="text-lg font-bold text-primary-900">My Routines</h1>
				<button className="text-sm font-light text-blue-500">Add</button>
			</div>
			<div className="mt-6 z-40">
				<ul>
					{routines.map(routine => (
						<li kye={routine.id} className="mb-4">
							<div className="px-4 py-6 rounded bg-white shadow ">
								<h3 className="text-md font-medium">{routine.title}</h3>
								<h4 className="text-sm font-light">
									Exercises:
									{routine.exercises.map(exercise => (
										<span key={exercise.id} className="text-sm font-light mx-1">
											{exercise.name}
										</span>
									))}
								</h4>
								<Link to="/routines" className="text-xs text-blue-500 mr-4">
									Edit
								</Link>
								<button className="text-xs text-red-500">Remove</button>
							</div>
						</li>
					))}
				</ul>
			</div>
			<BottomNav />
		</div>
	);
}
