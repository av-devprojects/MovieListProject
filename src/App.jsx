import {Routes, Route} from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import WorthIt from "./pages/WorthIt";
import YetToSee from "./pages/YetToSee";
import TimeWasted from "./pages/TimeWasted";
import "../src/css/App.css";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/worthit" element = {<WorthIt />}/>
          <Route path="/yettosee" element = {<YetToSee />}/>
          <Route path="/timewasted" element = {<TimeWasted />}/>
          
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App

// cp dist/index.html dist/404.html
