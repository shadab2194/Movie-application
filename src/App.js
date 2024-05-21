import "./styles.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import TopRated from "./Components/Toprated.js";
import Upcoming from "./Components/Upcoming.js";
import SingleMovie from "./Components/SingleMovie.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
