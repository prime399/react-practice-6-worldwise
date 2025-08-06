import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import { useReducer } from "react";

const initialState = {
  status: "loading",
  cities: [],
  countries: [],
  isSidebarOpen: false,
  query: "",
  activeTab: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "isSidebarOpen":
      return { ...state, isSidebarOpen: action.payload };
    case "searchQuery":
      return { ...state, query: action.payload };
    case "SET_TAB":
      return { ...state, activeTab: action.payload };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleNav(tab) {
    dispatch({ type: "SET_TAB", payload: tab });
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
          />
        }
      >
        <Route path="cities" element={<p>List of Cities</p>} />
        <Route path="countries" element={<p>List of Countries</p>} />
        <Route path="form" element={<p className="text-white">Form Data</p>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
