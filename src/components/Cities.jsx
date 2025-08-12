import React from "react";
import CityTab from "./CityTab";
import Loader from "./Loader";

export default function Cities({ status, cities, dispatch }) {
  return (
    // {status == "loading" && <Loader />}
    <>
      {status === "loading" && <Loader />}
      {cities && (
        <div>
          {cities.map((cityDetail, i) => (
            <CityTab city={cityDetail} key={i} />
          ))}
        </div>
      )}
    </>
  );
}
