import { useEffect } from "react";

export default function SearchBar({ query, dispatch, activeTab }) {
  const search_param = activeTab === "cities" ? "city" : "country";
  const url = `${import.meta.env.VITE_BASE_URL}/${search_param}?name=${query}`;

  useEffect(() => {
    if (!query || query.trim() === "") return;

    const Controller = new AbortController();
    const option = {
      method: "GET",
      headers: { "X-Api-Key": `${import.meta.env.VITE_API_KEY} ` },
      contentType: "application/json",
      signal: Controller.signal,
    };

    async function fetchQuery() {
      try {
        const response = await fetch(url, option);
        const data = await response.json();

        if (data) {
          dispatch({
            type: "setCities",
            payload: { cities: data, status: "ready" },
          });
        } else {
          console.log("API FAILED TO FETCH");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore AbortError, do not log
          return;
        }
        console.error(error);
        dispatch({ type: "setErrorMessage", payload: { error: error.name } });
      }
    }

    fetchQuery();

    return function () {
      Controller.abort();
    };
  }, [query, dispatch, url]);

  return (
    activeTab && (
      <div className="m-4">
        <input
          type="text"
          className="bg-green-800 rounded-2xl border-2 border-green-800 py-3 px-2 mb-4 ml-4 text-amber-50"
          placeholder={`Search ${activeTab}`}
          value={query}
          onChange={(e) =>
            dispatch({
              type: "searchQuery",
              payload: {
                query: e.target.value === null ? "" : e.target.value,
                activeTab: activeTab,
                status: "loading",
              },
            })
          }
        />
      </div>
    )
  );
}
