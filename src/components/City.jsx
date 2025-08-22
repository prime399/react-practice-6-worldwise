import { useAppState } from "../hooks";
import { useEffect } from "react";
import BackButton from "./BackButton";

export default function City({ city }) {
  const { getCity } = useAppState();
  //I am using useEffect here because this City component is originating from CityRoute render, but If I use getCity in component body it will trigger another render which will involve it's own render causing a indefinite loop and infinite network fetching.
  useEffect(() => {
    if (city?.name) {
      getCity(city.name);
    }
  }, [city?.name, getCity]);

  if (!city) return <div>Loading city...</div>;

  return (
    <>
      <div className="px-4 text-white text-base font-semibold">
        City Test with city name via react params: {city?.name} &&{" "}
        {city?.country}
      </div>
      <BackButton />
    </>
  );
}
