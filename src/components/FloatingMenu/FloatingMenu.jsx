import "./floatingMenu.css";
import { ImCross } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FloatingMenu() {
    return (
        <div id="controller">
            <div id="top-bar">
                <input type="checkbox" id="menuBtn"></input>
                <label id="labelMenu" htmlFor="menuBtn">
                    <ImCross />
                </label>
                <nav id="navBtn">
                    <a href={"https://www.instagram.com/murilo.adm"} target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill className="btn" />
                    </a>
                    <a href={"https://github.com/MuriloAlvesGD"} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="btn" />
                    </a>
                    <a
                        href={"https://www.linkedin.com/in/murilo-s-alves-86920727b"}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className="btn" />
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default FloatingMenu;
