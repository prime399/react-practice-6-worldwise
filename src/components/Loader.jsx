export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8 px-4">
      {/* Modern Loader Animation */}
      <div className="relative">
        {/* Outer ring with gradient */}
        <div className="w-20 h-20 border-4 border-transparent border-t-gradient rounded-full animate-spin"></div>

        {/* Middle ring */}
        <div
          className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-b-purple-400 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1s" }}
        ></div>

        {/* Inner ring */}
        <div
          className="absolute top-4 left-4 w-12 h-12 border-4 border-transparent border-l-cyan-400 rounded-full animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>

        {/* Center element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full animate-pulse-glow"></div>
        </div>
      </div>

      {/* Loading text with animated gradient */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-white animate-slide-up">
          Loading City
        </h3>
      </div>
    </div>
  );
}
