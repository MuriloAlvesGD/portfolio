import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <FloatingMenu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;