import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function AppContextProvider({ children }) {
  const initialState = {
    status: "ready",
    cities: [],
    countries: [],
    isSidebarOpen: true,
    query: "",
    activeTab: "",
    onNav: handleNav,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleNav(tab) {
    dispatch({ type: "setTab", payload: tab });
    navigate(`/app/${tab}`);
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
export { AppContext };
