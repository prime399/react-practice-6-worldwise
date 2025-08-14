import Loader from "./Loader";
import CountryTab from "./CountryTab";
import { useAppState } from "../hooks";

export default function Countries() {
  const { status, countries } = useAppState();

  return (
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
