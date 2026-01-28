import pills from "../style/pills.json";
import myPicture from "../style/assets/profileImage.jpeg";
import Carousel from "/src/components/Carousel/Carousel";
import "../style/styleSheets/Home.style.css";

function HomeView() {
    const icons = ["obsidian", "linux", "postman", "nodejs", "mongodb", "md", "git", "c", "bash"];
    return (
        <div id="home-container">
            <section id="about-container">
                <div id="about-left-side">
                    <img id="my-picture" src={myPicture}></img>
                    <div id="my-skills">
                        {icons.slice(0, 9).map((i, index) => (
                            <img
                                key={index}
                                className="skill-icons"
                                src={`https://skillicons.dev/icons?i=${i}&theme=dark`}
                                alt="icons"
                            />
                        ))}
                    </div>
                </div>
                <div id="about-right-side">
                    <h1>Murilo S. Alves</h1>
                    <p>
                        Natural de <strong>Lagoa Seca</strong>, uma pequena cidade do interior da{" "}
                        <strong>Paraíba</strong>, atualmente curso <strong>Sistemas de Informação na Unifacisa</strong>.
                        Meu foco principal é em <strong>Cyber Segurança</strong> e{" "}
                        <strong>Programação de Baixo Nível</strong>, utilizando a linguagem <strong>C</strong>.
                    </p>
                    <p>
                        Profissionalmente, atuo como <strong>Suporte de T.I.</strong> no{" "}
                        <strong>Hospital da FAP</strong> (Fundação Assistencial da Paraíba). Essa experiência me permite
                        aprofundar meus conhecimentos em <strong>Active Directory</strong>,{" "}
                        <strong>Estrutura e Gerenciamento de Redes</strong>, além de desenvolver habilidades em{" "}
                        <strong>atendimento ao usuário</strong>.
                    </p>
                    <strong>Eu definitivamente não sou o melhor, mas continuo tentando, de novo e de novo.</strong>
                </div>
            </section>
            <footer id="pills-container">
                <Carousel marginProp={"15px"} arrowSize={"clamp(2rem, 1rem + 5vw, 3rem)"}>
                    {pills || pills.length <= 0
                        ? pills.map((pill, index) => (
                              <span key={index} className="pill">
                                  {pill}
                              </span>
                          ))
                        : ""}
                </Carousel>
            </footer>
        </div>
    );
}

export default HomeView;