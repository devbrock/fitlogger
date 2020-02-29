import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../layout/BottomNav";
import Rectangle from "../../assets/svgs/SlantedRectangle.svg";

export default function Routines() {
  return (
    <div
      className="pt-12 px-4 bg-no-repeat bg-left-bottom"
      style={{ backgroundImage: `url(${Rectangle})` }}
    >
      <div className="flex justify-between pb-3 border-b-2 border-gray-300 ">
        <h1 className="text-lg font-bold text-primary-900">My Routines</h1>
        <button className="text-sm font-light text-blue-500">Add</button>
      </div>
      <div className="mt-6 z-40">
        <ul>
          <li className="mb-4">
            <div className="px-4 py-6 rounded bg-white shadow ">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm mb-6 font-light">
                Qui tempor exercitation nisi nisi irure.
              </h4>
              <Link className="text-xs text-blue-500 mr-4">Edit</Link>
              <button className="text-xs text-red-500">Remove</button>
            </div>
          </li>
          <li className="mb-4">
            <div className="px-4 py-6 rounded bg-white shadow ">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm mb-6 font-light">
                Qui tempor exercitation nisi nisi irure.
              </h4>
              <Link className="text-xs text-blue-500 mr-4">Edit</Link>
              <button className="text-xs text-red-500">Remove</button>
            </div>
          </li>
          <li className="mb-4">
            <div className="px-4 py-6 rounded bg-white shadow ">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm mb-6 font-light">
                Qui tempor exercitation nisi nisi irure.
              </h4>
              <Link className="text-xs text-blue-500 mr-4">Edit</Link>
              <button className="text-xs text-red-500">Remove</button>
            </div>
          </li>
          <li className="mb-4">
            <div className="px-4 py-6 rounded bg-white shadow ">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm mb-6 font-light">
                Qui tempor exercitation nisi nisi irure.
              </h4>
              <Link className="text-xs text-blue-500 mr-4">Edit</Link>
              <button className="text-xs text-red-500">Remove</button>
            </div>
          </li>
          <li className="mb-4">
            <div className="px-4 py-6 rounded bg-white shadow ">
              <h3 className="text-md font-medium">Routine Name</h3>
              <h4 className="text-sm mb-6 font-light">
                Qui tempor exercitation nisi nisi irure.
              </h4>
              <Link className="text-xs text-blue-500 mr-4">Edit</Link>
              <button className="text-xs text-red-500">Remove</button>
            </div>
          </li>
        </ul>
      </div>
      <BottomNav />
    </div>
  );
}
