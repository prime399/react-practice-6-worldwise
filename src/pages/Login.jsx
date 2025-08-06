import React from "react";
import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <>
      <PageNav />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <form className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg min-w-[320px] max-w-[90vw] flex flex-col gap-5">
          <h2 className="text-center text-2xl font-bold text-blue-900 mb-4">
            WorldWise Login
          </h2>
          <label className="flex flex-col gap-2 font-medium text-gray-700">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col gap-2 font-medium text-gray-700">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="p-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            type="submit"
            className="p-3 rounded-md bg-blue-700 text-white font-bold text-base mt-2 hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
