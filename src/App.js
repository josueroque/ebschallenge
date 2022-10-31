import { Route, Routes, BrowserRouter } from "react-router-dom";
import List from "./pages/List";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/" element={<List />} />
          {/* <Route path="/photos" element={<Photos />} />
          <Route path="/photos/:id" element={<Photos />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
