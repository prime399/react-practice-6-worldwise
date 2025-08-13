import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <>
      <PageNav />

      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://ik.imagekit.io/b5qewhvhb/Project%20for%20React%20Practice/Switerzland-landing-page.jpg?updatedAt=1754377205461"
            alt="A person walks along a scenic road lined with green fields and mountain views under a cloudy sky."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <section
          className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4
        py-12
        sm:px-6 sm:py-16
        md:px-12 md:py-24
        lg:px-24 lg:py-32
      "
        >
          <h1
            className="text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
          font-extrabold text-white text-center drop-shadow-lg mb-4
          sm:mb-6
        "
          >
            You travel the World!
            <br />
            <span className="text-blue-300">WorldWise</span> keeps track of your
            adventures.
          </h1>
          <h2
            className="text-base
          sm:text-lg
          md:text-2xl
          lg:text-3xl
          
          text-gray-200 text-center drop-shadow mb-6
          sm:mb-8
          max-w-xs
          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl
        "
          >
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to={"/app"}>
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-semibold
            px-6 py-3 text-base
            sm:px-8 sm:py-4 sm:text-lg
            md:px-10 md:py-5 md:text-xl
            lg:px-12 lg:py-6 lg:text-2xl
            rounded-lg shadow-lg transition duration-200
          "
            >
              See App
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
