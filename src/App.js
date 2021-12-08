import React from 'react';
import './style.css';
import MenuAppBar from './components/MenuAppBar.jsx';
import Rotas from './Route.jsx';
import Footer from './components/Footer.jsx';
import EComerceContainer from './containers/EComerceContainer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EComerceContainer from './containers/EComerceContainer';
import HomeContainer from './containers/HomeContainer';
import SobreNosContainer from './containers/SobreNosContainer';
import PageNotFund from './containers/PageNotFund';


const KEY = 'carShop.itens';

export default function App() {
  const [badge, setBadge] = React.useState();
  const [carShop, setCarShop] = React.useState([]);

  React.useEffect(() => {
    const storedCarShop = JSON.parse(localStorage.getItem(KEY));
    if (storedCarShop) {
      setCarShop(storedCarShop);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(carShop));
  }, [carShop]);

  const dellToCard = (id) => {
    const newCart = carShop.filter((item) => item.id !== id);

    setCarShop(newCart);
  };

  const editItemInCar = (p) => {
    const { id, name, valueInteger, price, imgSrc, num } = p;

    const newTodos = carShop.map((item) =>
      item.id === id ? { id, name, valueInteger, price, imgSrc, num } : item
    );

    setCarShop(newTodos);
  };

  return (
    <>
      <BrowserRouter>
        <MenuAppBar
          dellToCard={dellToCard}
          editItemInCar={editItemInCar}
          badge={badge}
          carShop={carShop}
        />
        <br />

        <Routes>
          {/* home */}
          <Route path="/" element={<HomeContainer />} />

          {/* sobre nos */}
          <Route path="/sobre_nos" element={<SobreNosContainer />} />

          {/* e-comerce */}
          <Route
            path="/shop"
            element={
              <EComerceContainer
                dellToCard={dellToCard}
                setCarShop={setCarShop}
                carShop={carShop}
                setBadge={setBadge}
              />
            }
          />
          <Route path="*" element={<PageNotFund />} />
        </Routes>

        <br />

        <Footer />
      </BrowserRouter>
    </>
  );
}
