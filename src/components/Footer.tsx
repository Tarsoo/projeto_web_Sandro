import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <h3 className="footer-logo">LogoMarca</h3>
          <div className="footer-social">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Faça parte do time</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>Funcionalidades</h4>
            <ul>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Análise de dados</a></li>
              <li><a href="#">Boot discord</a></li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Teste a Demo</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Feito com amor na aula de Programação Web 💙 ©2024 AktieTech - Todos os direitos reservados.
      </div>
    </footer>
  );
}
