import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Related from "screens/related";
import Recommend from "screens/recommend";
import Detail from "screens/detail";
import Editor from "screens/editor";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/related" element={<Related />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
