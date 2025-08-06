export default function SearchBar({ query, dispatch, activeTab }) {
  return (
    <div className="m-4">
      <input
        type="text"
        className="bg-green-800 rounded-2xl border-2 border-green-800 py-3 px-2 mb-4 ml-4 text-amber-50"
        placeholder="Search Cities..."
        value={query}
        onChange={(e) =>
          dispatch({ type: "searchQuery", payload: e.target.value })
        }
      />
    </div>
  );
}
