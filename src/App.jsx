import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import { useReducer } from "react";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityTab from "./components/CityTab";
import City from "./components/City";
import Form from "./components/Form";

const initialState = {
  status: "ready",
  cities: [],
  countries: [],
  isSidebarOpen: true,
  query: "",
  activeTab: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "isSidebarOpen":
      return { ...state, isSidebarOpen: action.payload };
    case "searchQuery":
      console.log(
        `query:${action.payload.query}, and activeTab: ${action.payload.activeTab}`
      );
      return {
        ...state,
        query: action.payload.query,
        activeTab: action.payload.activeTab,
        status: action.payload.status,
      };
    case "setTab":
      return { ...state, activeTab: action.payload };
    case "setCities":
      console.log(action.payload.cities);
      return {
        ...state,
        cities: action.payload.cities,
        status: action.payload.status,
      };
    case "setCountries":
      console.log(action.payload.countries);
      return {
        ...state,
        countries: action.payload.countries,
        status: action.payload.status,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleNav(tab) {
    dispatch({ type: "setTab", payload: tab });
    navigate(`/app/${tab}`);
  }

  const { status, cities, countries, isSidebarOpen, query, activeTab } = state;

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route
        path="app"
        element={
          <AppLayout
            dispatch={dispatch}
            isSidebarOpen={isSidebarOpen}
            query={query}
            onNav={handleNav}
            activeTab={activeTab}
            status={status}
            cities={cities}
          />
        }
      >
        <Route index element={<Navigate replace to={"cities"} />} />
        <Route
          path="cities"
          element={
            <Cities status={status} cities={cities} dispatch={dispatch} />
          }
        >
          {/* Detail now renders inside Cities via its <Outlet /> */}
          {/* <Route path=":id" element={<CityRoute cities={cities} />} /> */}
        </Route>

        {/* This route will render it's element inside AppLayout's outlet in this case which we want */}
        <Route path="cities/:id" element={<CityRoute cities={cities} />} />

        {/* Removed sibling detail route: it is now nested under cities */}
        {/* <Route path="cities/:id" element={<CityTab />} /> */}

        <Route
          path="countries"
          element={
            <Countries
              index
              status={status}
              countries={countries}
              dispatch={dispatch}
            />
          }
        />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function CityRoute({ cities }) {
  const { id } = useParams();
  const city = cities?.find((c) => String(c.name) === String(id));
  return city ? (
    <City city={city} />
  ) : (
    <p className="text-white">City not found</p>
  );
}

export default App;
