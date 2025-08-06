import { NavLink } from "react-router-dom";

export default function AppNav({ onNav, activeTab }) {
  return (
    <>
      <button
        to="cities"
        className={`${
          activeTab === "cities"
            ? "text-yellow-300 border-b-2 border-yellow-300"
            : "text-white hover:text-yellow-200"
        } text-base sm:text-lg lg:text-xl font-medium transition-colors  duration-200 p-4 m-5 `}
        onClick={() => onNav("cities")}
      >
        Cities
      </button>
      <NavLink
        to="countries"
        className={`${
          activeTab === "countries"
            ? "text-yellow-300 border-b-2 border-yellow-300"
            : "text-white hover:text-yellow-200"
        } text-base sm:text-lg lg:text-xl font-medium transition-colors duration-200 p-4  `}
        onClick={() => onNav("countries")}
      >
        Countries
      </NavLink>
    </>
  );
}
