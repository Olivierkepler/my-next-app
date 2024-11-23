// pages/dashboard/index.js
import OrderCard from '../../components/OrderCard';

export default function Dashboard() {
  const orders = [
    { id: 1, status: 'In Transit', destination: '123 Main St' },
    { id: 2, status: 'Delivered', destination: '456 Elm St' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Deliveries</h1>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
