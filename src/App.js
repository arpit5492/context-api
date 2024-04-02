import './App.css';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <div className="row pt-4">
        <div className="col-sm-4 mr-3">
          <div className="card" style={{height: "300px"}}>
            <div className="card-body">
              <h4 className="card-title">Purchase Component</h4>
              <hr />
              <select className="form-select" aria-label="default select example">
                <option>Apples - $2.34</option>
                <option>Oranges - $3.21</option>
                <option>Bananas - $5.43</option>
                <option>Grapes - $6.78</option>
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
