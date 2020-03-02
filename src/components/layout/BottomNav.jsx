import React from "react";
import { ReactComponent as Home } from "../../assets/svgs/home.svg";
import { ReactComponent as History } from "../../assets/svgs/history.svg";
import { ReactComponent as Routines } from "../../assets/svgs/routines.svg";
import { ReactComponent as Progress } from "../../assets/svgs/progress.svg";
import { ReactComponent as Account } from "../../assets/svgs/account.svg";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div>
      <div className="fixed bottom-0 left-0 bg-primary-900 w-full h-24 px-6">
        <ul className="flex justify-between text-white text-sm mt-8">
          <li>
            <Link to="/">
              <Home className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <History className="h-6 w-6" />
          </li>
          <li>
            <Link to="/routines">
              <Routines className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Progress className="h-6 w-6" />
          </li>
          <li>
            <Link to="/account">
              <Account className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
