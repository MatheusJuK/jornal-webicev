import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Noticia1 from "./Noticia1";
import Noticia2 from "./Noticia2";
import Noticia3 from "./Noticia3";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noticia1" element={<Noticia1 />} />
        <Route path="/noticia2" element={<Noticia2 />} />
        <Route path="/noticia3" element={<Noticia3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
