import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PreferidosDaCasa from '../components/PreferidosDaCasa.jsx';
import { useNavigate } from 'react-router-dom';

export default function HomeContainer() {
  let navigate = useNavigate();

  const toShop = () => {
  

    navigate('shop');
  };

  return (
    <>
      <div className="container-sm">
        <Carousel>
          <Carousel.Item onClick={toShop}>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/fotos-gratis/paezinhos-frescos-no-balcao-da-loja_169016-5441.jpg"
              alt="First slide"
            />
            <Carousel.Caption> 
              <h3 className="text-danger">Conheça a nossa loja</h3>

              
              <p>Click aqui e compre os melhores pães sem sair de casa.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/fotos-gratis/detalhe-macro-de-pao-frances_58702-2226.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/fotos-gratis/diferentes-tipos-de-pao-feitos-de-farinha-de-trigo_140725-5648.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <br />
      <PreferidosDaCasa />
    </>
  );
}
