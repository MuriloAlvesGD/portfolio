import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";
import HomeView from "../views/Home.view";
import ContactView from "../views/Contact.view";
import CertificatesView from "../views/Certificates.view";
import ProjectsView from "../views/Projects.view";

function Router() {
    
    //Not found cria o componente de página 404 nos padrões do react
    const NotFound = () => {
        return (
            <div
                style={{
                    background: "black",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <img style={{ height: "100%" }} src="https://httpcats.com/404.jpg" alt="404 Not Found" /> {/*Puxa a imagem do httpcats*/}
            </div>
        );
    };
    return (
        <BrowserRouter basename="/portfolio">
            <FloatingMenu />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/certificates" element={<CertificatesView />} />
                <Route path="/projects/:id" element={<ProjectsView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;