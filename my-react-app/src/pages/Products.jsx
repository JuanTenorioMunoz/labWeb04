import { Link } from 'react-router-dom';

const Products = () => {

const mockProducts = [
    { id: 1, name: 'Camiseta React', price: '$20' },
    { id: 2, name: 'Taza JavaScript', price: '$10' },
    { id: 3, name: 'Sticker de Gato Programador', price: '$5' },
];

  return (
    <div>
      <h1>Products Disponibles</h1>
      <ul>
        {mockProducts.map(product => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
