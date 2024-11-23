// pages/tracking/[id].js
import { useRouter } from 'next/router';

export default function Tracking() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Order Tracking</h1>
      <p>Tracking details for order ID: {id}</p>
      {/* Add a map or status component here */}
    </div>
  );
}
