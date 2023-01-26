import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./Pages/Game";
import Home from "./Pages/Home";
import PageError from "./Pages/PageError";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<PageError />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
