import { useSelector } from "react-redux";
import Product from "./Product";

export default () => {
    const cart = useSelector(state => state.cart.items);

    return <div className="cart">
        <h3 style={{margin : 8}}>Total : {cart.length}</h3>
        {
          cart.map(item => {
            return <Product data={item} key={item.id} isCart={true} />
          })
        }
    </div>
}