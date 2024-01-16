import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Personagens from "../pages/Personagem";

export default function RouteList() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home/>}/>
                <Route path="/card/:id" element={<Personagens/>} />
            </Routes>
        </BrowserRouter>
    )
}