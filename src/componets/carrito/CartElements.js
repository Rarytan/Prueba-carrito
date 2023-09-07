import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartContador";
import "./carrito.css"

const CartElements = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;

        });

        setCart(newCart);

    };

        return cart.map((product) => {
            return (
                <div className="cartContent" key={product.id}>        

                    <img src={product.img} alt="product-card" />
                    <h3 className="nombre">{product.name}</h3>
                    <CartItemCounter product={product} quanty={product.quanty} />
                    <h4 className="precio">${product.price * product.quanty}</h4>
                    <h4 className="delete-button" onClick={() => deleteProduct(product.id)}>Eliminar</h4>

                </div>
            );
        });

};

export default CartElements;