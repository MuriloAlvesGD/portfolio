import "../style/styleSheets/Projects.style.css";
import Carousel from "/src/components/Carousel/Carousel";
import projectsJSON from "/projects.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectsView() {
    const [mainProject, setMainProject] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const temp = parseInt(id);

        if (temp >= 0 && temp < projectsJSON.length) {
            setMainProject(temp);
        } else {
            navigate("/projects/0");
        }
    }, [navigate]);

    return (
        <main id="projects-container">
            <div id="main-project">
                <div id="top-section">
                    <img
                        id="main-img"
                        src={`/portfolio/projectsImages/${projectsJSON[mainProject].title}.png`}
                        alt={projectsJSON[mainProject].title}
                    />
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
                <Carousel marginProp={"15px"} arrowSize={"clamp(4rem, 1rem + 5vw, 6rem)"}>
                    {projectsJSON.map((p, i) =>
                        i !== mainProject ? (
                            <img
                                key={i}
                                className="projects-icon"
                                src={`/portfolio/projectsImages/${p.title}.png`}
                                onClick={() => navigate(`/projects/${i}`)}
                                alt={p.title}
                            />
                        ) : null
                    )}
                </Carousel>
            </div>
        </main>
    );
}

export default ProjectsView;