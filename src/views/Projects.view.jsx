import "../style/styleSheets/Projects.style.css";
import Carousel from "/src/components/Carousel/Carousel";
import projectsJSON from "../data/projects.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectsView() {
    const [mainProject, setMainProject] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
    const [selection, setSelection] = useState([[]]);

    
    // Resgate o ID da URL para atualizar o Main Project
    useEffect(() => {
        const temp = parseInt(id);

        // Checa se o id é válido, se não retorna o projeto padrão
        if (temp >= 0 && temp < projectsJSON.length) {
            setMainProject(temp);
        } else {
            navigate("/projects/0");
        }

        // Separação para sugestão de projetos
        const topLimit = 5;
        if (projectsJSON.length <= topLimit) {
            setSelection(projectsJSON);
        } else {
            let temp = [];
            let min = 0;
            let max = topLimit;

            while (max < projectsJSON.length) {
                temp.push(projectsJSON.slice(min, max));
                min += topLimit;
                max += topLimit;
            }
            max = max > projectsJSON.length ? projectsJSON.length : max;
            temp.push(projectsJSON.slice(min, max));
            setSelection(temp);
        }
    }, [navigate]);

    return (
        <main id="main-container">
            <div id="main-project">
                <div id="top-section">
                    <a href={projectsJSON[mainProject].git_link} target="_blank" rel="noopener noreferrer">
                        <img
                            id="main-img"
                            src={`/portfolio/projectsImages/${projectsJSON[mainProject].title}.png`}
                            alt={projectsJSON[mainProject].title}
                        />
                    </a>
                    <div id="short-info">
                        <h1 id="project-title">{projectsJSON[mainProject].title.replaceAll("_", " ")}</h1>
                        <div id="project-stacks">
                            {projectsJSON[mainProject].technology.map((t, i) => (
                                <img
                                    className={"project-stack"}
                                    key={i}
                                    src={`https://skillicons.dev/icons?i=${t.toLowerCase()}&theme=dark`}
                                    alt={`${t}-icon`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <p id="project-description">{projectsJSON[mainProject].description}</p>
            </div>
            <h1 id="section-title">DEMAIS PROJETOS</h1>
            <div id="projects-selector">
                <Carousel marginProp={"0"} arrowSize={"500px"}>
                    {selection.map((projects, p_index) => (
                        <div key={p_index} className="projects-container">
                            {projects.map((p, i) =>
                                p.title !== projectsJSON[mainProject].title ? (
                                    <img
                                        key={i}
                                        className="projects-icon"
                                        src={`/portfolio/projectsImages/${p.title}.png`}
                                        onClick={() => navigate(`/projects/${p.id}`)}
                                        alt={p.title}
                                    />
                                ) : null
                            )}
                        </div>
                    ))}
                </Carousel>
            </div>
        </main>
    );
}

export default ProjectsView;