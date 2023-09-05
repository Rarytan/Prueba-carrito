import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Total = () => {
    const { cart } = useContext(dataContext);

    const cantidadQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
    return <span className="cart-items-total">{cantidadQuanty}</span>;
    
};

export default Total;