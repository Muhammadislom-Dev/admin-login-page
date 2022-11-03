import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Aside from "./layout/Aside/Aside";
import Navbar from "./layout/Navbar/Navbar";
import Analitica from "./Page/Analitica/Analitica";
import PaginationPage from "./Page/PaginationPage/PaginationPage";

export const Public = () => {

  return (
    <div>
     <Navbar />
      <div className="App-page">
        <Aside />
        <div className="App-box">
          <Routes>
            <Route path="/" element={<PaginationPage />} />
            <Route path="/analitica" element={<Analitica />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
