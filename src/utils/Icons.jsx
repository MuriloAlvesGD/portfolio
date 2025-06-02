import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import Carousel from "../components/Carousel/Carousel.jsx";

export default function Icons({ langs }) {
    const langIcon = {
        javascript: <IoLogoJavascript />,
        python: <IoLogoPython />,
        html: <IoLogoHtml5 />,
        css: <IoLogoCss3 />,
        nodejs: <IoLogoNodejs />,
        react: <IoLogoReact />,
        react_native: <TbBrandReactNative />,
        java: <FaJava />,
        typescript: <SiTypescript />
    };

    const langColor = {
    javascript: "yellow",      // Amarelo
    python: "yellow",          // Amarelo
    html: "orange",            // Laranja
    css: "dodgerblue",               // Azul
    nodejs: "yellowgreen",     // Verde Amarelo
    react: "lightblue",        // Azul Claro
    react_native: "skyblue", // Azul Esverdeado
    java: "blue",              // Azul
    typescript: "blue"         // Azul
};


    return (
        <Carousel marginProp={"0"} arrowSize={"clamp(0.5rem, 0.4rem + 4vw, 2rem)"}>
            {langs.map((l) => (
                <div style={{color: langColor[l.toLowerCase()], fontSize: "clamp(2.5rem, 2rem + 4vw, 4rem)"}}>
                    {langIcon[l.toLowerCase()] || null}
                </div>
            ))}
        </Carousel>
    );
}
