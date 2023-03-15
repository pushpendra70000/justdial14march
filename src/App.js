import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
//import Notfound from "./pages/NotFound";
import Register from "./pages/Register";

function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/details" element={<Details></Details>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;