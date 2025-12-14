

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

export default function PlanDetails() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await api.get(`/plans/${id}`);
        console.log(res.data);
        setPlan(res.data);
      } catch (err) {
        setError("Failed to load plan");
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

  if (loading) return <p className="pt-28 text-center">Loading...</p>;
  if (error) return <p className="pt-28 text-center text-red-500">{error}</p>;
  if (!plan) return null;

  return (
    <div className="pt-28 max-w-4xl mx-auto px-6">
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>

        <p className="text-gray-600 mb-2">
          Trainer: {plan.trainer?.name}
        </p>

        <p className="text-xl font-semibold mb-4">₹{plan.price}</p>

        <p className="mb-4">{plan.description}</p>

        <p className="text-sm text-gray-500">
          Duration: {plan.duration} days
        </p>
      </div>
    </div>
  );
}






