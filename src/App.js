import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
