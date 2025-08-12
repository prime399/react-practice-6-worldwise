import React from "react";

export default function CityTab({ city }) {
  return (
    <div>
      {city.name}
      {city.latitude}
    </div>
  );
}
