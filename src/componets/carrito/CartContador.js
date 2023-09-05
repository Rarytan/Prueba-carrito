import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
    const { cart, setCart, buyProducts} = useContext(dataContext);
    const decrece = () => {
        const productRepeat = cart.find((item) => item.id === product.id);
        productRepeat.quanty !== 1 && setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1 } : item)));
    };
    return (
        <>
        <p>{product.quanty}</p>
        <p class="contador-button" onClick={()=> buyProducts(product)}>+</p>
        <p class="contador-button" onClick={decrece}>-</p>
        
        
        </>
    );
};

export default CartItemCounter;