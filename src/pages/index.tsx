import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solutions.css";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import CardsSection from "../components/CardsSection";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#" onClick={() => setShowMobileMenu(false)}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#solution"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#pricing"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Contato
                      </a>
                    </li>
                  </ul>

                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Olá!</p>
          <h1>
            É possível ter todas as informações do cliente em um só lugar sem
            tanta burocracia?
          </h1>
          <p>
            Sim, e você acabou de encontrá-la! Cadastre-se para receber um
            contato e entender como nossa aplicação turbinará suas vendas
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section className="container" id="solution">
        <header>
          <h2>Soluções</h2>
          <div className="desktop-only">
            <h2>Sob medida para você</h2>
          </div>
          <p>
            Inovação é com a gente! A <strong>Digitaliza</strong> já conquistou
            diversos clientes, seja você mais um deles, veja tudo que pode
            ganhar com nossos serviços.
          </p>
        </header>
        <section className="even-columns">
          <CardsSection />
        </section>
      </section>
    </>
  );
}
