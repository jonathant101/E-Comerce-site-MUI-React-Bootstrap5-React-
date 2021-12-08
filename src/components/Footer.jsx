import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="justify-content-center fas fa-gem"></i>Padaria
                Rota66
              </h6>
              <p>Padaria Rota66</p>
              <p>
                <Link to="/sobre_nos">Sobre nós</Link>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Mapa do Site</h6>
              <p>
                <a href="#!" className="text-reset">
                  cardapio
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  visite nossa cozinha
                </a>
              </p>
              {/*        <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p> */}
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home me-3"></i> Abbottabad, Paquistão,
                NºAk-47
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                OsamabinLaden@AllahuAkbar.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +55 11 4002-8922 Yudi
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +55 11 4002-8922 Priscila
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'd8cdcd' }}>
        © 2021 Copyright Jonathan e leandro
        {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a> */}
      </div>
    </footer>
  );
}
