import React from 'react';
import Card from 'react-bootstrap/Card';
import './../style.css';

export default function PreferidosDaCasa() {
  const nana = (_) => {
    console.log('chernbil');
  };

  return (
    <>
      <hr />
      <h5 className="d-flex justify-content-center">Os preferidos da casa</h5>
      <div className=" container-sm d-flex" id="cardscss">
        {/*  justify-content-around */}
        <Card style={{ width: '16rem', marginBottom: '7px' }}>
          <Card.Img
            onChange={nana}
            variant="top"
            src="https://image.freepik.com/fotos-gratis/paezinhos-frescos-no-balcao-da-loja_169016-5441.jpg"
          />
          <Card.Body>
            <Card.Title>Pão Frances</Card.Title>
            <Card.Text>
              delicioso pao Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo, nemo!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '16rem', marginBottom: '7px' }}>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/fotos-gratis/paezinhos-frescos-no-balcao-da-loja_169016-5441.jpg"
          />
          <Card.Body>
            <Card.Title>Pão 2</Card.Title>
            <Card.Text>
              delicioso pao Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo, nemo!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }}>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/fotos-gratis/paezinhos-frescos-no-balcao-da-loja_169016-5441.jpg"
          />
          <Card.Body>
            <Card.Title>Pão 3</Card.Title>
            <Card.Text>
              delicioso pao Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo, nemo!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
