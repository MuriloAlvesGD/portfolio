import "./floatingMenu.css";
import { ImCross } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PixelIcons from "../../style/pixelIcons";
import { useNavigate } from "react-router-dom";

function FloatingMenu() {
    const navigate = useNavigate();

    return (
        <div id="controller">
            <input type="checkbox" id="menuBtn"></input>
            <label id="labelIcon" htmlFor="menuBtn">
                <ImCross id="icon" />
            </label>
            <nav id="navBar">
                <PixelIcons icon="user" className="btn" onClick={() => navigate("/")} /> {/* HOME */}
                <PixelIcons icon="cards" className="btn" onClick={() => navigate("/certificates")} />{" "}
                {/* CERTIFICADOS */}
                <PixelIcons icon="troph" className="btn" onClick={() => navigate("/projects")} /> {/* PROJETOS */}
                <PixelIcons icon="messageNew" className="btn" onClick={() => navigate("/contact")} /> {/* CONTATO */}
                <PixelIcons icon="moon" className="btn" /> {/* LIGHT/DARK MODE */}
            </nav>
        </div>
    );
}

export default FloatingMenu;