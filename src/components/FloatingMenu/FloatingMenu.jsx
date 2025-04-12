import "./floatingMenu.css";
import { ImCross } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";

function FloatingMenu() {
    return (
        <div id="controller">
            <div id="top-bar">
                <input type="checkbox" id="menuBtn"></input>
                <label id="labelMenu" htmlFor="menuBtn">
                    <ImCross />
                </label>
                <nav id="navBtn">
                    <IoLogOut className="btn" />
                </nav>
            </div>
        </div>
    );
}

export default FloatingMenu;
