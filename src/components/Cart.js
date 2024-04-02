import { useContext } from "react";
import totalContext from "../store/TotalContext";

const Cart = (props) => {
    const {products} = props;
    // console.log(products);
    const tPrice = useContext(totalContext);
    console.log("Component rendered");
    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Cart Component</h4>
                    <hr />
                    {products.map((prod, index) => {
                        return (
                            <li key={index}>{prod}</li>
                        )
                    })}
                    <div className="fw-bold">Price: ${tPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;