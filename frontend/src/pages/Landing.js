

import { useEffect, useState } from "react";
import { api } from "../api";
import PlanCard from "../components/PlanCard";

export default function Landing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("/plans").then(res => setPlans(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map(plan => (
        <PlanCard key={plan._id} plan={plan} />
      ))}
    </div>
  );
}
