
const KEY = 'carShop.itens';

useEffect(() => {
    
  const storedCarShop = JSON.parse(localStorage.getItem(KEY));
  if (storedCarShop) {
    setCarShop(storedCarShop);
  }
}, []);




useEffect(() => {
  localStorage.setItem(KEY, JSON.stringify(carShop));
}, [carShop]);