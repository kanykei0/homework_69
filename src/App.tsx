import { Route, Routes } from "react-router-dom";
import AutoComplete from "./components/SearchForm/Autocomplete";
import ShowInfo from "./containers/ShowsInfo/ShowsInfo";

function App() {
  return (
    <div className="container mt-5">
      <AutoComplete />
      <Routes>
        <Route
          path="/"
          element={<h3 className="mt-5">↗ Start searching for a movie</h3>}
        />
        <Route path="/tv-shows/:id" element={<ShowInfo />} />
        <Route path="*" element={<h5 className="mt-5">Not Found!</h5>} />
      </Routes>
    </div>
  );
}

export default App;
