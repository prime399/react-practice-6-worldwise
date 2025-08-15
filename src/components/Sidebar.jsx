import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import SearchBar from "./SearchBar";
import { useAppState, useAppDispatch } from "../hooks";

export default function Sidebar({ onNav }) {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppState();
  return (
    <>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0"
          onClick={() => dispatch({ type: "isSidebarOpen", payload: false })}
        />
      )}
      {/* Sidebar card */}
      <div
        className={`
        fixed top-0 left-0 h-full z-50 
        bg-green-900 rounded-r-2xl shadow-2xl
        transform transition-transform duration-300 ease-in-out
        w-80 sm:w-96
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        my-6 h-[calc(100vh-2rem)]
      `}
      >
        <div className="p-6">
          <Logo />
        </div>

        <AppNav onNav={onNav} />
        <SearchBar />
        <Outlet />

        <footer className="absolute inset-x-0 bottom-4 h-10 text-center font-semibold text-white">
          <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>
      </div>
    </>
  );
}
