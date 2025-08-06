import PageNav from "../components/PageNav";

export default function Products() {
  return (
    <>
      <PageNav />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">
            Our Products
          </h1>
          <p className="text-lg text-blue-700 mb-10 text-center">
            Discover tools and accessories to make your travels smarter, safer,
            and more enjoyable with World Wise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img
                src="https://img.icons8.com/color/96/000000/globe--v2.png"
                alt="World Map"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Interactive World Map
              </h2>
              <p className="text-blue-600 mb-4 text-center">
                Explore countries, cities, and landmarks with our interactive
                map. Plan your next adventure with ease!
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img
                src="https://img.icons8.com/color/96/000000/passport.png"
                alt="Travel Passport"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Travel Passport
              </h2>
              <p className="text-blue-600 mb-4 text-center">
                Keep track of your journeys and memories. Collect digital stamps
                as you visit new places!
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img
                src="https://img.icons8.com/color/96/000000/compass--v1.png"
                alt="Smart Compass"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Smart Compass
              </h2>
              <p className="text-blue-600 mb-4 text-center">
                Navigate the world confidently with our real-time smart compass
                and travel tips.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
