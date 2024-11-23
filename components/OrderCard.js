// components/OrderCard.js
export default function OrderCard({ order }) {
    return (
      <div className="border p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-bold">Order #{order.id}</h2>
        <p>Status: {order.status}</p>
        <p>Destination: {order.destination}</p>
      </div>
    );
  }
  