import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

//Page Imports
const Product = lazy(() => import( "./pages/Product"));
const Pricing = lazy(() => import( "./pages/Pricing"));
const Homepage = lazy(() => import( "./pages/Homepage"));
const PageNotFound = lazy(() => import( "./PageNotFound"));
const Login = lazy(() => import( "./pages/Login"));
const AppLayout = lazy(() => import( "./pages/AppLayout"));

//Size Comparision:
// vite v7.0.6 building for production...
// ✓ 112 modules transformed.
// dist/index.html                            0.46 kB │ gzip:   0.29 kB
// dist/assets/worldwise logo-KiuQgcoo.png  141.16 kB
// dist/assets/index-BORU-9BK.css            44.31 kB │ gzip:  12.23 kB
// dist/assets/index-DoF2uzl8.js            397.19 kB │ gzip: 122.06 kB
// ✓ built in 3.73s

//Components Imports
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityTab from "./components/CityTab";
import City from "./components/City";
import Form from "./components/Form";

//Custom Hooks
import { useAppState } from "./hooks";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Navigate replace to={"cities"} />} />
        <Route path="cities" element={<Cities />}>
          {/* Detail now renders inside Cities via its <Outlet /> */}
          {/* <Route path=":id" element={<CityRoute cities={cities} />} /> */}
        </Route>

        {/* This route will render it's element inside AppLayout's outlet (because Applayout is parent container of CityRoute route) in this case which we want */}
        <Route path="cities/:id" element={<CityRoute />} />

        {/* Removed sibling detail route: it is now nested under cities */}
        {/* <Route path="cities/:id" element={<CityTab />} /> */}

        <Route path="countries" element={<Countries index />} />
        <Route path="form" el ement={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
}

function CityRoute() {
  const { id } = useParams(); //Also the name of city coming from URL parameter
  const { cities } = useAppState();
  const city = cities?.find((c) => String(c.name) === String(id));
  return city ? (
    <City city={city} />
  ) : (
    <p className="text-white">City not found</p>
  );
}

export default App;
