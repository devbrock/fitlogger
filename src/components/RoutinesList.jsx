import React from "react";

export default function RoutinesList() {
  return (
    <div className="my-6">
      <h1 className="text-lg font-medium text-primary-900">My Routines</h1>
      <div className="mt-6">
        <ul className="flex flex-nowrap overflow-x-auto">
          <li>
            <div className="rounded bg-white shadow px-4 py-2 mr-4 w-48">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm font-light">00 Exercises ~00min</h4>
            </div>
          </li>
          <li>
            <div className="rounded bg-white shadow px-4 py-2 mr-4 w-48">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm font-light">00 Exercises ~00min</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
