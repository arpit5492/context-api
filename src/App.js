import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
  const [prods, setProds] = useState([
    {pName: "Apples", price: 2.34},
    {pName: "Bananas", price: 3.21},
    {pName: "Grapes", price: 6.78},
    {pName: "Oranges", price: 5.43}
  ]);

  const prodItems = prods.map((prod, index) => {
    return (
      <option key={index}>{prod.pName} - {prod.price}</option>
    )
  });
  return (
    <div className="App">
      <div className="row pt-4">
        <div className="col-sm-4 mr-3">
          <div className="card" style={{height: "300px"}}>
            <div className="card-body">
              <h4 className="card-title">Purchase Component</h4>
              <hr />
              <select className="form-select" aria-label="default select example">
                {prodItems}
              </select>
            </div>
          </div>
        </div>
        <Cart />
        <Total />
      </div>
    </div>
  );
}

export default App;
