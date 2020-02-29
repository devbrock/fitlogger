import React from "react";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";

export default function Loading() {
  return (
    <div className="pt-64">
      <Logo className="mx-auto" />
      <h1 className="uppercase text-center">Loading...</h1>
    </div>
  );
}
