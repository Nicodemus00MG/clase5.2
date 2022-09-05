
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Aboutme from "./components/Aboutme";
import CharacterId from "./components/CharacterId";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contactme from "./Contactme";
import { useParams } from "react-router-dom";

function App() {

  

  return (
    <div className="App">
      <nav>
        <ul className="list_navbar">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/aboutme"}>ABOUTME</Link>
          </li>
          <li>
            <Link to={"/projects"}>PROJECTS</Link>
          </li>
          <li>
            <Link to={"/contactme"}>CONTACTME</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/character/:id" element={<CharacterId/>}/>
      </Routes>
    
      <footer>
        <h4>create for Nicodemuss00_MG</h4>
        <h4>Made in Academlo 2022 🤑</h4>
      </footer>
    </div>
  );
}

export default App;
