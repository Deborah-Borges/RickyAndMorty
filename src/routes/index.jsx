import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home/>}/>
                <Route path="" element={<Personagem/>} />

            </Routes>
        </BrowserRouter>
    )
}