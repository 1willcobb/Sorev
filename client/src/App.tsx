import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Products,
  Faq,
  Why,
  Portal,
  Login,
  VideoPlayer,
} from "./components/Pages";

function App() {
  return (
    <>
      <Header />
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
