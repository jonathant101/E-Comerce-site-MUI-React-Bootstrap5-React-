import React from 'react';

import './../style.css';
import Card from '../components/Cards.jsx';

import { listProducts } from '../service/ProductsList.jsx';

export default function EComerceContainer({
  setBadge,
  carShop,
  setCarShop,
  dellToCard,
}) {
  React.useEffect(
    (_) => {
      setBadge(carShop.length);
    },
    [carShop]
  );

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* render cards*/}

      {listProducts.map(({ id, name, description, price, imgSrc }) => (
        <Card
          dellToCard={dellToCard}
          setCarShop={setCarShop}
          carShop={carShop}
          id={id}
          imgSrc={imgSrc}
          name={name}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
}
