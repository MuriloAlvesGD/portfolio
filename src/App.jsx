import defaultImageIcon from "./assets/defaultImageIcon.png"
import './App.css';
import Carousel from "./components/Carousel/Carousel.jsx";
import { DiJsBadge } from "react-icons/di";
import {useState} from "react";
import ImageInput from "./components/ImageInput/ImageInput.jsx";

function App() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("(..) .....-....")
    const [subject, setSubject] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleTelChange = (e) => {
        // Remove caracteres indesejados usando regex
        e = e.replace(/[^\d]/g, "");

        // Converte a string em um array de caracteres e filtra os pontos
        const filteredDigits = e.split('').filter((digit) => digit !== '.');

        // Se não houver dígitos diferentes de zero, preenche com pontos à esquerda
        const finalDigits = filteredDigits.length > 0 ? filteredDigits : ['.'];

        // Converte de volta para string e preenche com pontos à esquerda
        const numberString = finalDigits.join('').padStart(11, '.');

        // Formata o número
        const number = `(${numberString.slice(0, 2)}) ${numberString.slice(2, 7)}-${numberString.slice(7, 11)}`;
        setTel(number);
    }

    const handleSubject = (e) => {
        e = e.target.value.trim()
        setSubject( `IDEIA DE PROJETO - ${e}`)
    }


  return (
    <div className="App">
      <header className="App-header">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MuriloAlvesGD&layout=compact&hide_border=true&title_color=ffffff&text_color=ffffff&icon_color=ffffff&bg_color=262629" alt="infos"/>
      </header>
        <div className="Topic-divisor">
            <div className="line"/>
            <span>PROJETOS</span>
            <div className="line"/>
        </div>
        <Carousel>
            <div className="project-card">
                <div className="container-img">
                    <div className={"logo"}>
                        <DiJsBadge/>
                    </div>
                    <h3 className="project-title">
                        PROJECT NAME
                    </h3>
                    <img src={defaultImageIcon} alt={"project"} className="project-img"/>
                </div>
                <div className="description">
                <h3>DESCRIÇÃO</h3>
                <p>Este é um exemplo de um card usado para apresentação de projetos</p>
                </div>
            </div>
        </Carousel>
        <div className="Topic-divisor">
            <div className="line"/>
            <span>CONTATO</span>
            <div className="line"/>
        </div>
        <div className="contact-box">
            <form action="https://formsubmit.co/b0fb19526804b04fc8334b35fc641c2d" method="post" target="_self" encType="multipart/form-data">
                <input type="hidden" name="_template" value="box"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="_honey" id="honeyPot"/>
                <input type="hidden" name="_next" value="http://localhost:3000"/>
                <input type="hidden" name="_subject" value={subject}/>
                <input type="hidden" name="_blacklist"
                       value="padrão de spam, termo banido, oferta especial, clique aqui, ganhe dinheiro rápido, promoção exclusiva, grátis, sem custo, produto milagroso, última chance, não perca, urgente, confidencial, apenas hoje, inscrição gratuita, satisfação garantida, risco zero, aumente seu tráfego, melhore sua vida, venda rápida"/>
                <h2>VAMOS FALA DO SEU PROJETO?</h2>
                <h4>CONTATOS</h4>
                <input required type="text" name="nome" placeholder="SEU NOME ou APELIDO" onChange={(e) => handleSubject(e)}/>
                <input required  type="email" name="email" placeholder="E-MAIL" value={email} onChange={(e) => handleEmailChange(e)}/>
                <input type="tel" name="telefone" placeholder="TELEFONE" value={tel} onChange={(e) => handleTelChange(e.target.value)}/>
                <h4>DESCRIÇÃO</h4>
                <textarea required name="Descrição" placeholder="Descreva aqui o seu Projeto"></textarea>
                <ImageInput/>
                {
                    regex.test(email) ? <button id="formSubmit" type="submit">ENVIAR</button> : ""
                }
            </form>
        </div>
    </div>
  );
}

export default App;
