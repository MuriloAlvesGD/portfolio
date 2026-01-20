import { useState } from "react";
import "/src/style/styleSheets/Contact.style.css";
import PixelIcons from "../style/pixelIcons";

function ContactView() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        <div id="contact-container">
            <section id="social-container">
                <a href="https://github.com/muriloalvesgd">
                    <PixelIcons icon="gitHub" className="social-icon" />
                </a >
                {/*GITHUB*/}
                <a href="https://www.linkedin.com/in/murilo-s-alves-86920727b/">
                    <PixelIcons icon="linkedin" className="social-icon" />
                </a>
                {/*LINKEDIN*/}
                <a href="https://www.instagram.com/murilo.dev_">
                    <PixelIcons icon="insta" className="social-icon" />
                </a>
                {/*INSTAGRAM*/}
            </section>
            <main id="form-container">
                <form
                    action="https://formsubmit.co/568a02d6bcaa9401e6e5456dae10e152"
                    method="post"
                    target="_self"
                    encType="multipart/form-data">
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" id="honeyPot" />
                    <input type="hidden" name="_next" value="https://MuriloAlvesGD.github.io/portfolio" />
                    <input type="hidden" name="_subject" value={subject} />
                    <input
                        type="hidden"
                        name="_blacklist"
                        value="padrão de spam, termo banido, oferta especial, clique aqui, ganhe dinheiro rápido, promoção exclusiva, grátis, sem custo, produto milagroso, última chance, não perca, urgente, confidencial, apenas hoje, inscrição gratuita, satisfação garantida, risco zero, aumente seu tráfego, melhore sua vida, venda rápida"
                    />
                    <h2>QUE TAL ME MANDAR UM E-MAIL?</h2>
                    <input id="name" type="text" name="nome" placeholder="" onChange={(e) => handleSubject(e)} />
                    <label htmlFor="name">seu nome</label>
                    <input
                        required
                        id="email"
                        type="email"
                        name="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                    <label htmlFor="email">seu e-mail*</label>
                    <h4>MENSAGEM*</h4>
                    <textarea required id="message" name="mensagem"></textarea>
                    {regex.test(email) ? (
                        <button id="formSubmit" type="submit">
                            ENVIAR
                        </button>
                    ) : (
                        ""
                    )}
                </form>
            </main>
        </div>
    );
}

export default ContactView;