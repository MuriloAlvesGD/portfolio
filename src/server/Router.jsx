import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";
import HomeView from "../views/Home.view";
import ContactView from "../views/Contact.view";
import CertificatesView from "../views/Certificates.view";
import ProjectsView from "../views/Projects.view";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <FloatingMenu />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/certificates" element={<CertificatesView />} />
                <Route path="/projects/:id" element={<ProjectsView />} />
                <Route path="/contact" element={<ContactView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;