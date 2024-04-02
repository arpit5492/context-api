import { useContext } from "react";
import totalContext from "../store/TotalContext";

const Total = () => {
    // const {total} = props;
    const tPrice = useContext(totalContext);
    return (
        <div className="col-sm-4">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Total price component</h4>
                    <hr />
                    <h4>Total: ${tPrice}</h4>
                </div>
            </div>
        </div>
    )
}

export default Total;