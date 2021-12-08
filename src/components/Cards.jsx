import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Card({
  id,
  name,
  description,
  price,
  imgSrc,
  carShop,
  setCarShop,
  dellToCard,
}) {
  const [num, setNum] = React.useState(0);
  const [inCar, setInCar] = React.useState(false);


  React.useEffect(() => {
    if (num) {
      sessionStorage.setItem('num', JSON.stringify(num))
    }
    if (inCar) {
      sessionStorage.setItem('inCar', JSON.stringify(inCar))
    }
  },[num, inCar])






  const handleButtonSum = () => {
    setNum(num + 1);
  };
  const handleButtonSub = () => {
    num === 0 ? 0 : setNum(num - 1);
  };

  const addToCart = (_) => {
    const finalPricePerItem = num > 0 ? price * num : price;
    const valueInteger = price * num;
    setCarShop([...carShop, { id, name, valueInteger, price, imgSrc, num }]);

    setInCar(true);
  };

  const delProd = () => {
    dellToCard(id);
    setInCar(false);
    setNum(0);
  };

  return (
    <div className="card m-2" key={id} style={{ width: '12rem' }}>
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"> R$: {price}</p>

      

        <div
          className={`d-flex justify-content-center  ${
            inCar ? 'd-none' : ''
          }  `}
        >
          {' '}
          <button onClick={handleButtonSub} type="button" className=" btn ">
            <RemoveIcon />
          </button>
          <span className="border border-secondary rounded-sm p-1 m-1">
            {num}
          </span>
          <button onClick={handleButtonSum} type="button" className="btn ">
            <AddIcon />
          </button>
        </div>

        <button
          onClick={addToCart}
          type="button"
          className={`btn btn-success col-12 ${num == 0 ? 'disabled' : ''}
          ${inCar ? 'd-none' : ''}`}
        >
          <AddShoppingCartIcon />
        </button>
        <button
          onClick={addToCart}
          type="button"
          className={`btn btn-secondary col-12  disabled  ${
            inCar ? '' : 'd-none'
          }`}
        >
          {num == 1
            ? `Ok, 1 unidade deste item foi adicionada ao seu carrinho!😉  `
            : ` Ok, ${num} unidades deste item foram adicionadas ao seu carrinho!😉  `}
        </button>
        <button
          onClick={delProd}
          type="button"
          className={`btn btn-danger col-12  mt-1  ${inCar ? '' : 'd-none'}`}
        >
          <DeleteForeverIcon />
        </button>
      </div>
    </div>
  );
}

/* 


    
    
    */
