import photo from '../assets/eu.jpg';
import NavBar from "../components/NavBar";
import '../styles/About.css';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="about-wrapper">
        <div className="about-container">
          <img
            src={photo}
            alt="Henrique eu"
            className="profile-img"
          />
          <div className="about-content">
            <p>
              Bem-vindo ao meu espaço! Meu nome é <strong>Henrique Ribeiro</strong>. Sou apaixonado por música e tecnologia.
              Meu primeiro contato com a música foi através dos famigerados <i>Flashbacks</i>, onde aprendi a gostar de
              artistas como <strong>Elton Jhon, Queen, Aerosmith</strong> dentre outros! Posteriormente me afeiçoei à cultura japonesa, 
              tendo como artistas preferidos <strong>L&apos;arc~en~ciel, Omega Tribe, Makoto Kawamoto e muitos outros!</strong>
              Mas o meu estilo preferido é <strong>Power Metal!</strong> Bandas como <strong>Rhapsody, Stratovarius e Angra</strong> certamente
              marcaram minha jornada até aqui! Obrigado por ler um pouquinho e se interar sobre meu gosto musical xD
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/hesr/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter">Linkedin</i>
              </a>
              <a href="https://github.com/ribeiro-henrique" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram">GitHub</i>
              </a>
              <a href="https://www.instagram.com/ribeiro_hesr/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin">Instagram</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
