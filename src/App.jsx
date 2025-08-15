import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";

//Local Imports
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityTab from "./components/CityTab";
import City from "./components/City";
import Form from "./components/Form";

//Custom Hooks
import { useAppState } from "./hooks";

function App() {
  return (
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

        {/* This route will render it's element inside AppLayout's outlet in this case which we want */}
        <Route path="cities/:id" element={<CityRoute />} />

        {/* Removed sibling detail route: it is now nested under cities */}
        {/* <Route path="cities/:id" element={<CityTab />} /> */}

        <Route path="countries" element={<Countries index />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function CityRoute() {
  const { id } = useParams();
  const { cities } = useAppState();
  const city = cities?.find((c) => String(c.name) === String(id));
  return city ? (
    <City city={city} />
  ) : (
    <p className="text-white">City not found</p>
  );
}

export default App;
