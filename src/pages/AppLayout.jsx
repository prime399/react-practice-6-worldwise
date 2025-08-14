import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import { useAppState, useAppDispatch } from "../hooks";

export default function AppLayout({ onNav }) {
  const { isSidebarOpen, query, activeTab, status, cities } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className="relative h-screen">
      {/* Map covers full screen */}
      <Map />

      {/* Sidebar overlay */}
      <Sidebar
        isOpen={isSidebarOpen}
        dispatch={dispatch}
        query={query}
        onNav={onNav}
        activeTab={activeTab}
        status={status}
        cities={cities}
      />

      {/* Toggle button */}
      <button
        onClick={() =>
          dispatch({ type: "isSidebarOpen", payload: !isSidebarOpen })
        }
        className="absolute top-4 left-4 z-40 bg-slate-600 text-white p-3 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>
    </div>
  );
}
