import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import SearchBar from "./SearchBar";
import { useAppState, useAppDispatch } from "../hooks";

export default function Sidebar({ onNav }) {
  const dispatch = useAppDispatch();
  const { isSidebarOpen, status } = useAppState();
  
  return (
    <>
      {/* Backdrop */}
      {/* {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/[15%] "
          onClick={() => dispatch({ type: "isSidebarOpen", payload: {isSidebarOpen: false }})}
        />
      )} */}
      {/* Sidebar card */}
      <div
        className={`
        fixed top-0 left-0 h-full z-30 
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

        {/* Error Message  */}
        {status === "Failed" && <p className="text-center font-semibold text-red-200 p-10">Try Different Query!</p>}

        <footer className="absolute inset-x-0 bottom-4 h-10 text-center font-semibold text-white">
          <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>
      </div>
    </>
  );
}
