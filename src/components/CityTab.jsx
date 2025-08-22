import { Link } from "react-router-dom";

export default function CityTab({ city }) {
  return (
    <li className="list-none">
      <Link
        className=" flex justify-between items-center w-4/5 mx-auto rounded-xl px-4 py-2 bg-green-800"
        //here "TO" is acting as a dispatcher, the value it redirecting is similar to how we handle dispatch funciton. with the help of <Link> from react router dom.
        to={`${city.name}?lat=${city.latitude}&lng=${city.longitude}`}
      >
        <h3 className="text-white font-semibold text-lg">{city.name}</h3>
        <div className="text-white text-sm italic">{city.country}</div>
        <button className="bg-red-400 hover:bg-red-500 text-white rounded-full p-2 transition-colors duration-300">
          &times;
        </button>
      </Link>
    </li>
  );
}
