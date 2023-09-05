import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const handleBuyClick = (product) => {
    buyProducts(product);
    setShowMessage(true); // Mostrar el mensaje al comprar
    setTimeout(() => setShowMessage(false), 2000); // Ocultar el mensaje después
  };

  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? data
    : data.filter((product) => product.categoria === categoriaSeleccionada);

  return (
    <div className="product-card-container">
      <div className="categorias">
        <button className="button-categorias" onClick={() => setCategoriaSeleccionada("Todos")}>Todos</button>
        <button className="button-categorias" onClick={() => setCategoriaSeleccionada("Tennis")}>Tennis</button>
        <button className="button-categorias" onClick={() => setCategoriaSeleccionada("Camisetas")}>Camisetas</button>
        <button className="button-categorias" onClick={() => setCategoriaSeleccionada("Pantalones")}>Pantalones</button>
      </div>
      {showMessage && <div className="agregado"><h1>Producto agregado al carrito</h1></div>}
      <div className="productos">
        {productosFiltrados.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => handleBuyClick(product)}>Comprar</button>
          </div>
        ))}
      </div>

      
      
      
      <br />
      <br />
      <p>BY: @BRAJHAN ARBOLEDA</p>
    </div>
  );
};

export default Products;