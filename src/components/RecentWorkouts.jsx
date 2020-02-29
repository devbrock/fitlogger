import React from "react";
import { Link } from "react-router-dom";

export default function RecentWorkouts() {
  return (
    <div>
      <h3 className="capitalize font-medium text-lg">Most Recent workouts</h3>
      <div>
        <ul className="flex flex-wrap justify-between mt-6">
          <li>
            <div className="rounded bg-white shadow px-4 py-2 mb-4">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-xs font-light">00 Month 00</h4>
              <Link to="/" className="text-blue-500 font-light text-xs">
                View Workout
              </Link>
            </div>
          </li>
          <li>
            <div className="rounded bg-white shadow px-4 py-2 mb-4">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-xs font-light">00 Month 00</h4>
              <Link to="/" className="text-blue-500 font-light text-xs">
                View Workout
              </Link>
            </div>
          </li>
          <li>
            <div className="rounded bg-white shadow px-4 py-2">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-xs font-light">00 Month 00</h4>
              <Link to="/" className="text-blue-500 font-light text-xs">
                View Workout
              </Link>
            </div>
          </li>
          <li>
            <div className="rounded bg-white shadow px-4 py-2">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-xs font-light">00 Month 00</h4>
              <Link to="/" className="text-blue-500 font-light text-xs">
                View Workout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
