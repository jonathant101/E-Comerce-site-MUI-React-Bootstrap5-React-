import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CardFinalShop({
  id,
  name,
  valueInteger,
  price,
  imgSrc,
  finalPricePerItem,
  num,
  dellToCard,
  editItemInCar,
}) {
  const delProd = (_) => {
    dellToCard(id);
  };

  const subItem = (_) => {
    if (num > 0) {
      const sub = num - 1;
      const subPrice = valueInteger - price;
      const p = { id, name, valueInteger: subPrice, price, imgSrc, num: sub };

      editItemInCar(p);
    }
  };
  const AddItem = (_) => {
    if (num > 0) {
      const sum = num + 1;
      const sumPrice = valueInteger + price;
      const p = { id, name, valueInteger: sumPrice, price, imgSrc, num: sum };

      editItemInCar(p);
    }
  };

  return (
    <>
      <div key={id} className="card mb-3" style={{ maxWidth: '200px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>

              <div className={`d-flex justify-content-center`}>
                {' '}
                <button onClick={subItem} type="button" className=" btn ">
                  <RemoveIcon />
                </button>
                <span className="border border-secondary rounded-sm p-1 m-1">
                  {num}
                </span>
                <button onClick={AddItem} type="button" className="btn ">
                  <AddIcon />
                </button>
                <button
                  onClick={delProd}
                  type="button"
                  className={`btn btn-danger mt-1`}
                >
                  <DeleteForeverIcon />
                </button>
              </div>

              {/* fim do corpo */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
