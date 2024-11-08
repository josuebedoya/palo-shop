import React, { useEffect, useState } from 'react';
import { GetProducts, InsertData } from 'base-datos/src';

function Contact() {
  const [ products, setProducts ] = useState([]);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await GetProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      }
    };

    const insertnewData = async () => {
      try {
        await InsertData("test", {
          name: 'Nuevo dato insertado'
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
    insertnewData();
  }, []);

  if (error) {
    return <p>Algo ha fallado: {error}</p>;
  }

  return (
    <div className='container mx-auto'>
      <h1>Productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export { Contact };