import Header from "./Components/Header";
import Navbar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Products, Faq, Why, Portal, Login, VideoPlayer } from "./Pages";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/why" element={<Why />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
