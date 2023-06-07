import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import DriftPage from "./components/DriftPage.js";
import TimeAttackPage from "./components/TimeAttackPage.js";
import ForzaPage from "./components/ForzaPage.js";
import Menu from "./components/Menu.js";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </BrowserRouter>
  );
}