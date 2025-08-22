// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

// Converts a country code (e.g., "US") to its corresponding flag emoji
// export function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

function Form() {
  // State for city name input
  const [cityName, setCityName] = useState("");
  // State for country input (currently unused)
  const [country, setCountry] = useState("");
  // State for date input, initialized to current date
  const [date, setDate] = useState(new Date());
  // State for notes input
  const [notes, setNotes] = useState("");
  //Navigate hook
  const navigate = useNavigate();

  return (
    <form className="max-w-lg mx-auto bg-green-800 p-8 rounded-lg shadow-md space-y-6">
      {/* City name input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="cityName" className="font-semibold text-gray-100">
          City name
        </label>
        <input
          id="cityName"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      {/* Date input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="date" className="font-semibold text-gray-100">
          When did you go to {cityName}?
        </label>
        <input
          id="date"
          type="date"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      {/* Notes input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="notes" className="font-semibold text-gray-100">
          Notes about your trip to {cityName}
        </label>
        <textarea
          id="notes"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      {/* Form action buttons */}
      <div className="flex space-x-4 justify-end">
        <Button
          type="submit"
          style="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-900 transition"
        >
          Add
        </Button>
        <Button
          type="button"
          style="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300 transition"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
