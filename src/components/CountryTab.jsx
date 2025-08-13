export default function CountryTab({ country }) {
  return (
    <li className="list-none flex justify-between items-center w-4/5 mx-auto rounded-xl px-4 py-2 bg-green-800">
      <h3 className="text-white font-semibold text-lg">{country.name}</h3>
      <div className="text-white text-sm italic">{country.region}</div>
      <button className="bg-red-400 hover:bg-red-500 text-white rounded-full p-2 transition-colors duration-300">
        &times;
      </button>
    </li>
  );
}
