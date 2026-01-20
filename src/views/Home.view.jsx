import pills from "../style/pills.json";
import myPicture from "../style/assets/profileImage.jpeg";
import Carousel from "/src/components/Carousel/Carousel";
import "../style/styleSheets/Home.style.css";

function HomeView() {
    const icons = ["java", "spring", "postgres", "mongodb", "js", "nodejs", "react", "html", "css"];
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus neque at ex porttitor
                        efficitur. Aliquam efficitur porta dapibus. Nullam vel nibh ac arcu venenatis vestibulum.
                        Quisque purus eros, ullamcorper sit amet nulla ut, faucibus consequat ipsum. In sapien orci,
                        ultricies quis lectus eget, luctus commodo augue. Suspendisse convallis rutrum arcu eu
                        fermentum. In elit nibh, tristique sed venenatis ac, scelerisque id mauris. Proin ullamcorper
                        urna imperdiet ultricies ultrices. Fusce est ex, condimentum quis enim sed, viverra condimentum
                        dolor. Fusce vitae euismod mauris. Fusce finibus, neque in pellentesque tristique, sapien orci
                        imperdiet diam, quis ornare nulla lorem quis lectus. Quisque.
                    </p>
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