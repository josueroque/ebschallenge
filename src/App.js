import { Route, Routes, BrowserRouter } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
