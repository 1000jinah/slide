import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Related from "screens/related";
import Recommend from "screens/recommend";
import Detail from "screens/detail";
import Editor from "screens/editor";
import Dashboard from "screens/dashboard";
import Presentation from "screens/presentation";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {/* Redirect from / to /recommend */}
          <Route path="/" element={<Navigate to="/recommend" replace />} />
          <Route path="/related" element={<Related />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
