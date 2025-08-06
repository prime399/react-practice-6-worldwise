import PageNav from "../components/PageNav";

export default function Pricing() {
  return (
    <>
      <PageNav />
      <div
        className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <h1 className="mt-10 mb-6 text-4xl font-bold text-blue-900 tracking-tight">
          WorldWise Pricing
        </h1>
        <div className="mt-10 flex flex-wrap gap-8 justify-center w-full max-w-6xl">
          {/* Free Plan */}
          <div className="bg-white/95 rounded-xl shadow-lg p-8 min-w-[260px] max-w-xs flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">Free</h2>
            <div className="text-2xl font-bold text-blue-600 mb-4">
              $0
              <span className="text-base text-slate-500 font-normal"> /mo</span>
            </div>
            <ul className="list-none p-0 mb-6 text-slate-700 text-base w-full">
              <li className="mb-2 flex items-center gap-2">
                🌍 Explore 10 destinations
              </li>
              <li className="mb-2 flex items-center gap-2">
                🗺️ Basic trip planning
              </li>
              <li className="mb-2 flex items-center gap-2">
                🔒 Secure account
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-6 py-2 font-semibold transition-colors duration-200">
              Get Started
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white/95 rounded-xl shadow-lg p-8 min-w-[260px] max-w-xs flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl border-2 border-blue-600">
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">Pro</h2>
            <div className="text-2xl font-bold text-blue-600 mb-4">
              $9
              <span className="text-base text-slate-500 font-normal"> /mo</span>
            </div>
            <ul className="list-none p-0 mb-6 text-slate-700 text-base w-full">
              <li className="mb-2 flex items-center gap-2">
                🌍 Unlimited destinations
              </li>
              <li className="mb-2 flex items-center gap-2">
                🗺️ Advanced trip planning
              </li>
              <li className="mb-2 flex items-center gap-2">📱 Mobile access</li>
              <li className="mb-2 flex items-center gap-2">
                📊 Travel analytics
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-6 py-2 font-semibold transition-colors duration-200">
              Upgrade
            </button>
          </div>
          {/* Team Plan */}
          <div className="bg-white/95 rounded-xl shadow-lg p-8 min-w-[260px] max-w-xs flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">Team</h2>
            <div className="text-2xl font-bold text-blue-600 mb-4">
              $29
              <span className="text-base text-slate-500 font-normal"> /mo</span>
            </div>
            <ul className="list-none p-0 mb-6 text-slate-700 text-base w-full">
              <li className="mb-2 flex items-center gap-2">
                👥 Up to 10 users
              </li>
              <li className="mb-2 flex items-center gap-2">
                🗺️ Shared trip planning
              </li>
              <li className="mb-2 flex items-center gap-2">
                🔗 Collaboration tools
              </li>
              <li className="mb-2 flex items-center gap-2">
                💬 Priority support
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-6 py-2 font-semibold transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
