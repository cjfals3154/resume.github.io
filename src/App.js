import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
