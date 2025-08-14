import React from "react";
import CityTab from "./CityTab";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import { useAppState } from "../hooks";

export default function Cities() {
  const { status, cities } = useAppState();

  return (
    <>
      {status === "loading" && <Loader />}
      {cities && status !== "loading" && (
        <div className="text-white font-medium">
          <div className="ml-10 mb-4">List of Cities:-</div>
          {cities.map((cityDetail, i) => (
            <CityTab city={cityDetail} key={i} />
          ))}
          {/* Detail for /app/cities/:id will render here */}
          <Outlet />
        </div>
      )}
    </>
  );
}
