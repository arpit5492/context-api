import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
  const prods = [
    {pName: "Apples", price: 1.45},
    {pName: "Bananas", price: 1.67},
    {pName: "Grapes", price: 2.32},
    {pName: "Oranges", price: 7.89}
  ];

  const prodItems = prods.map((prod, index) => {
    return (
      <option key={index} value={prod.price}>{prod.pName} - ${prod.price}</option>
    )
  });

  const [cart, setCart] = useState([]);
  const [tPrice, setPrice] = useState(0);

  const prodHandler = (e) => {
    const text = (e.target.options[e.target.selectedIndex].innerHTML);
    const price = parseFloat(e.target.value);
    // console.log(typeof(price));
    const total = tPrice + price;
    console.log(text);
    const tCart = [...cart];
    tCart.push(text);
    // console.log(tCart);
    
    setCart(tCart);
    setPrice(total);
    // console.log(cart);
  }
  return (
    <div className="App">
      <div className="row pt-4">
        <div className="col-sm-4 mr-3">
          <div className="card" style={{height: "300px"}}>
            <div className="card-body">
              <h4 className="card-title">Purchase Component</h4>
              <hr />
              <select onChange={prodHandler} className="form-select" aria-label="default select example">
                {prodItems}
              </select>
            </div>
          </div>
        </div>
        <Cart 
          products = {cart}
        />
        <Total 
          total = {tPrice}
        />
      </div>
    </div>
  );
}

export default App;
