import React from "react";
import { ReactComponent as Arms } from "../assets/svgs/arms_shoulders.svg";

export default function NextWorkout() {
  return (
    <div className="rounded bg-primary-900 py-2 px-4 text-white rounded shadow">
      <h3 className="font-medium text-xs uppercase">Your next workout</h3>
      <h3 className="font-bold text-sm uppercase">Routine Name Here</h3>
      <div className="my-4">
        <ul className="flex">
          <li>
            <Arms className="p-2 h-12 w-12 bg-primary-500 rounded mr-4" />
          </li>
          <li>
            <Arms className="p-2 h-12 w-12 bg-primary-500 rounded mr-4" />
          </li>
          <li>
            <Arms className="p-2 h-12 w-12 bg-primary-500 rounded mr-4" />
          </li>
          <li>
            <Arms className="p-2 h-12 w-12 bg-primary-500 rounded mr-4" />
          </li>
          <li>
            <Arms className="p-2 h-12 w-12 bg-primary-500 rounded mr-4" />
          </li>
        </ul>
      </div>
    </div>
  );
}
