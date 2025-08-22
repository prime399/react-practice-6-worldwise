import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

function reducer(state, action) {
  const Payload = action.payload;
  
  switch (action.type) {
    case "isSidebarOpen":
      return { ...state, isSidebarOpen: Payload.isSidebarOpen };
    case "searchQuery":
      console.log(
        `query:${Payload.query}, and activeTab: ${Payload.activeTab}`
      );
      return {
        ...state,
        query: Payload.query,
        activeTab: Payload.activeTab,
        status: Payload.status,
      };
    case "setTab":
      return { ...state, activeTab: Payload };
    case "setCities":
      console.log(Payload.cities, Payload.lng, Payload.lat);
      return {
        ...state,
        cities: Payload.cities,
        status: Payload.status,
        center: Payload.lat && Payload.lng ? {lat: parseFloat(Payload.lat), lng: parseFloat(Payload.lng)} : state.center
      };
    case "setCountries":
      console.log(Payload.countries, );
      return {
        ...state,
        countries: Payload.countries,
        status: Payload.status,
        center: Payload.lat && Payload.lng ? {lat: parseFloat(Payload.lat), lng: parseFloat(Payload.lng)} : state.center
      };
    case "setErrorMessage":
      console.log(Payload.error)
      return {
        ...state, ErrorMesage: Payload.error, status: Payload.status
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function AppContextProvider({ children }) {
  const initialState = {
    status: "ready",
    ErrorMesage: "",
    cities: [],
    countries: [],
    isSidebarOpen: true,
    query: "",
    activeTab: "",
    onNav: handleNav,
    getCity: getCity,
    center: {lat: 51.505, lng: -0.09}
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  // // Ensure sidebar stays open after initial load
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!state.isSidebarOpen) {
  //       console.log("Force opening sidebar after initial load");
  //       dispatch({ type: "isSidebarOpen", payload: true });
  //     }
  //   }, 100);
    
  //   return () => clearTimeout(timer);
  // }, [state.isSidebarOpen]);

  function handleNav(tab) {
    dispatch({ type: "setTab", payload: tab });
    navigate(`/app/${tab}`);
  }

  async function getCity(city) {
    const option = {
      method: "GET",
      headers: { "X-Api-Key": `${import.meta.env.VITE_API_KEY} ` },
      contentType: "application/json",
    };
    const url = `${import.meta.env.VITE_BASE_URL}/city?name=${city}`;

    if (!city) {
      throw new Error("City shouldn't be empty");
    } else {
      const response = await fetch(url, option);
      const data = await response.json();
      dispatch({
        type: "setCities",
        payload: { cities: data, status: "ready", lng: data[0].longitude, lat: data[0].latitude },
      });
    }
  }

  return (
    //This is useful if I don't want to use custom hook for global state, rather retrive data from Appcontext Provider with the help of useContext
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
export { AppContext };
