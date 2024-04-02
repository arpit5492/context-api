const Cart = (props) => {
    const {products} = props;
    // console.log(products);
    return (
        <div className="col-sm-4 mr-3">
          <div className="card" style={{height: "300px"}}>
            <div className="card-body">
              <h4 className="card-title">Cart Component</h4>
              <hr />
              {products.map((prod, index) => {
                return (
                    <p key={index}>{prod}</p>
                )
              })}
            </div>
          </div>
        </div>
    )
}

export default Cart;