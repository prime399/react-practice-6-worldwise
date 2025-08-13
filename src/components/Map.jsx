import { useSearchParams, useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className="w-full h-full bg-slate-900"
      onClick={() => navigate("form")}
    >
      <div className="p-8 text-white">Map Content</div>
      <div className="text-white font-bold">
        latitude of city {lat} and langtitude:- {lng}
      </div>
      <button
        onClick={() => {
          setSearchParams({ lat: 20, lng: 45 });
        }}
        className="text-white font-bold bg-amber-800 rounded-4xl px-3 mt-3 hover:bg-amber-700 "
      >
        Tap to Change Position across whole app
      </button>
    </div>
  );
}
