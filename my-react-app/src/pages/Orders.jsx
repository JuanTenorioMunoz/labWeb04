import { Link } from "react-router-dom";

const Orders = () => {


  const mockOrders = [
    { id: 101, product: "Camiseta React", date: "2024-04-01" },
    { id: 102, product: "Taza JavaScript", date: "2024-04-03" },
  ];

  return (
    <div>
      <h1>Mis Pedidos</h1>

         {<ul>
          {mockOrders.map((order) => (
            <li key={order.id}>
              Pedido #{order.id}: {order.product} — {order.date}
            </li>
          ))}
        </ul>}

      <br />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Orders;
