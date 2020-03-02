import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import NextWorkout from "../NextWorkout";
import RoutinesList from "../RoutinesList";
import RecentWorkouts from "../RecentWorkouts";
import Progress from "../Progress";
import BottomNav from "../layout/BottomNav";

export default function Dashboard() {
  return (
    <div className="px-4 pb-32">
      <Logo className="mx-auto pt-2" />
      <h1 className="text-primary-900 mb-4 font-bold text-lg pb-3 border-b-2 border-gray-300">
        Workouts
      </h1>
      <NextWorkout />
      <RoutinesList />
      <RecentWorkouts />
      <Progress />
      <BottomNav />
    </div>
  );
}
