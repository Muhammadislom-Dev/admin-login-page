import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Aside from "./layout/Aside/Aside";
import Navbar from "./layout/Navbar/Navbar";
import PaginationPage from "./Page/PaginationPage/PaginationPage";

function App() {

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

  return (
    <div className="App">   
    <Login />   
    </div>
  );
}

export default App;
