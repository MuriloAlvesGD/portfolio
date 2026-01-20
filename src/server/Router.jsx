import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../views/Home.view";
import ContactView from "../views/Contact.view";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <FloatingMenu />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/contact" element={<ContactView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;