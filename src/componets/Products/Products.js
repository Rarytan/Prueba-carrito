import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "./Products.css";

const Products = () => {
  
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [showMessage, setShowMessage] = useState(false);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
    
      .then((res) => {
        setData(res.data);

        const uniqueCategorias = [...new Set(res.data.map((product) => product.category))];
        setCategorias(["Todos", ...uniqueCategorias]);

      });
  }, []);

  const handleBuyClick = (product) => {
    buyProducts(product);
    setShowMessage(true); // Mostrar el mensaje al comprar
    setTimeout(() => setShowMessage(false), 2000); // Ocultar el mensaje después
  };

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? data
    : data.filter((product) => product.category === categoriaSeleccionada);

  return (
    <div className="product-card-container">
      <div className="categorias">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`button-categorias ${categoria === categoriaSeleccionada ? "active" : ""}`}
            onClick={() => handleCategoriaClick(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="productos">

        {productosFiltrados.map((product) => (
          <div className="card" key={product.id}>

            <img src={product.image} alt="img-product-card" />
            <h3>{product.title}</h3>
            <h4>{product.category}</h4>
            <h6>{product.description}</h6>
            <h4>${product.price}</h4>

            <button onClick={() => handleBuyClick(product)}>Comprar</button>

          </div>
        ))}
      </div>

      {showMessage && <div className="agregado"><h1>Producto agregado al carrito</h1></div>}
      
      <br />
      <br />
      <p>BY: @BRAJHAN ARBOLEDA</p>
    </div>
  );
};

export default Products;
