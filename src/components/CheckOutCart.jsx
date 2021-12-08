import React from 'react';
import Badge from '@mui/material/Badge';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardFinalShop from './CardFinalShop.jsx';

export default function ModalShopCar({ badge, carShop,dellToCard,editItemInCar }) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [finalPrice, setFinalPrice] = React.useState(0);

  React.useEffect(() => {
    const newFinalPrice = carShop.reduce(
      (som, item) => item.valueInteger + som,
      0
    );
    setFinalPrice(newFinalPrice);
  }, [carShop]);

  return (
    <>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleShow}
      >
        <Badge badgeContent={badge} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carShop.map(({ id, name, valueInteger, price, imgSrc, num }) => (
            <CardFinalShop
            editItemInCar={editItemInCar}

            dellToCard={dellToCard}
              id={id}
              name={name}
              valueInteger={valueInteger}
              price={price}
              imgSrc={imgSrc}
              num={num}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <h1 className="col-12 d-flex flex-row-reverse bd-highlight">
            {' '}
            Preço total: R$: {finalPrice}{' '}
          </h1>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
