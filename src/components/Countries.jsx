import Loader from "./Loader";
import CountryTab from "./CountryTab";

export default function Countries({ status, countries, dispatch }) {
  return (
    // {status == "loading" && <Loader />}
    <>
      {status === "loading" && <Loader />}
      {countries && status !== "loading" && (
        <div className="text-white font-medium">
          <div className="ml-10 mb-4">List of Countries:-</div>
          {countries.map((countryDetail, i) => (
            <CountryTab country={countryDetail} key={i} />
          ))}
        </div>
      )}
    </>
  );
}
