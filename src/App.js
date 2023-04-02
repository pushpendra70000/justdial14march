import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/layout";
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
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home></Home>}></Route>
                    <Route path="login" element={<Login></Login>}></Route>
                    <Route path="register" element={<Register></Register>}></Route>
                    <Route path="details" element={<Details></Details>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;