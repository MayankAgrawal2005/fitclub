

import { Link } from "react-router-dom";

export default function PlanCard({ plan }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
      <p className="text-sm text-gray-600">
        Trainer: {plan.trainer?.name}
      </p>
      <p className="font-semibold mt-2">₹{plan.price}</p>

      <Link
        to={`/plans/${plan._id}`}
        className="inline-block mt-3 text-indigo-600 font-medium"
      >
        Subscribe Now →
      </Link>
    </div>
  );
}
