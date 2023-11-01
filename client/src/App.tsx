import { Routes, Route } from "react-router-dom";
import { Home, Products, Faq, Why, Portal, Login, VideoPlayer } from "./pages";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ResponsiveAppBar from "./components/Header";

function App() {
  return (
    <>
      <ResponsiveAppBar />

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
