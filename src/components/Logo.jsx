import WorldWiseLogo from "../assets/worldwise logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={WorldWiseLogo}
        alt="World Wise Logo"
        className="w-12 h-12 -rotate-12 drop-shadow-lg"
      />
      <span className="text-white text-2xl font-bold tracking-wide select-none">
        WorldWise
      </span>
    </Link>
  );
}
