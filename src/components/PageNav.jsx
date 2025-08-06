import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-green-900 px-4 sm:px-8 py-3 sm:py-4 shadow-lg">
      <Logo />
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center mt-2 sm:mt-0">
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `text-base sm:text-lg lg:text-xl font-medium transition-colors duration-200 ${
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "text-white hover:text-yellow-200"
              } pb-1`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-base sm:text-lg lg:text-xl font-medium transition-colors duration-200 ${
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "text-white hover:text-yellow-200"
              } pb-1`
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <Link
            to="/login"
            className="text-base sm:text-lg lg:text-xl font-medium bg-green-700 text-white border-2 rounded-lg px-2 py-1 hover:bg-green-800 "
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
