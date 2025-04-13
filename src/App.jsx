//COMPONENTS
import Carousel from "./components/Carousel/Carousel.jsx";
import ImageInput from "./components/ImageInput/ImageInput.jsx";
import PhoneInput from "./components/PhoneInput.jsx";

//ASSETS
import "./App.css";
import defaultImageIcon from "./assets/defaultImageIcon.png";
import profileImage from "./assets/profileImage.jpeg";
import Icons from "./utils/Icons.jsx";

//OUTROS
import { useState } from "react";
import projectsJSON from "./utils/projects.json";

function App() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const icons = ["java", "spring", "postgres", "mongodb", "js", "nodejs", "react", "html", "css"];
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubject = (e) => {
        e = e.target.value.trim();
        setSubject(`IDEIA DE PROJETO - ${e}`);
    };

    return (
        <div className="App">
            <h1 id="title">PORTFÓLIO - MuriloAlvesGD</h1>
            <header className="App-header">
                <div id="profile-card">
                    <img id="profile-img" src={profileImage} alt="foto de perfil" />
                    <img
                        id="typing-name"
                        src="https://readme-typing-svg.herokuapp.com?font=&size=18&pause=1000&color=F7F7F7&background=FFFFFF00&center=true&vCenter=true&width=280&height=30&lines=Murilo+dos+Santos+Alves"
                        alt="Typing SVG"
                    />
                </div>
                <div id="git-img">
                    <img
                        id="stats"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=MuriloAlvesGD&layout=compact&hide_border=true&title_color=ffffff&text_color=ffffff&icon_color=ffffff&bg_color=2B2B2EFF"
                        alt="infos"
                    />
                    <div>
                        {icons.map((i) => (
                            <img className="icons" src={`https://skillicons.dev/icons?i=${i}&theme=dark`} alt="icons" />
                        ))}
                    </div>
                </div>
            </header>
            <div className="Topic-divisor">
                <div className="line" />
                <span>PROJETOS</span>
                <div className="line" />
            </div>
            <Carousel marginProp={"20px"} arrowSize={"3rem"}>
                {projectsJSON.map((p) => (
                    <div className="project-card">
                        <div className="container-img">
                            <div className={"logo"}>
                                <Icons langs={p.technology} />
                            </div>
                            <a href={p.git_link} target="_blank" rel="noopener noreferrer">
                                <h3 className="project-title" href={p.git_link}>
                                    {p.title}
                                </h3>
                            </a>
                            <img src={`/projectsImage/${p.title}.png`} alt="project" className="project-img" onError={(e) => { e.target.onerror = null; e.target.src = defaultImageIcon; }} />
                        </div>
                        <div className="description">
                            <h3>DESCRIÇÃO</h3>
                            <p>{p.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className="Topic-divisor">
                <div className="line" />
                <span>CONTATO</span>
                <div className="line" />
            </div>
            <div className="contact-box">
                <form
                    action="https://formsubmit.co/b0fb19526804b04fc8334b35fc641c2d"
                    method="post"
                    target="_self"
                    encType="multipart/form-data">
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" id="honeyPot" />
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_subject" value={subject} />
                    <input
                        type="hidden"
                        name="_blacklist"
                        value="padrão de spam, termo banido, oferta especial, clique aqui, ganhe dinheiro rápido, promoção exclusiva, grátis, sem custo, produto milagroso, última chance, não perca, urgente, confidencial, apenas hoje, inscrição gratuita, satisfação garantida, risco zero, aumente seu tráfego, melhore sua vida, venda rápida"
                    />
                    <h2>VAMOS FALAR DO SEU PROJETO?</h2>
                    <h4>CONTATOS</h4>
                    <input
                        required
                        id="name"
                        type="text"
                        name="nome"
                        placeholder=""
                        onChange={(e) => handleSubject(e)}
                    />
                    <label htmlFor="name">nome</label>
                    <input
                        required
                        id="email"
                        type="email"
                        name="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                    <label htmlFor="email">e-mail</label>
                    <PhoneInput id="phone" />
                    <label htmlFor="phone">telefone</label>
                    <h4>DESCRIÇÃO</h4>
                    <textarea required id="description" name="Descrição"></textarea>
                    <h4>IMAGENS ANEXADAS</h4>
                    <ImageInput />
                    {regex.test(email) ? (
                        <button id="formSubmit" type="submit">
                            ENVIAR
                        </button>
                    ) : (
                        ""
                    )}
                </form>
            </div>
        </div>
    );
}

export default App;
