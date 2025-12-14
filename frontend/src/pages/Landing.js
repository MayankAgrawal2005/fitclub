// import { useEffect, useState } from "react";
// import { api } from "../api";
// import { Link } from "react-router-dom";


// export default function Landing() {
// const [plans, setPlans] = useState([]);


// useEffect(() => {
// api.get("/plans").then(res => setPlans(res.data));
// }, []);


// return (
// <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
// {plans.map(p => (
// <div key={p._id} className="border rounded-lg p-4 shadow">
// <h3 className="text-lg font-bold">{p.title}</h3>
// <p className="text-sm">Trainer: {p.trainer.name}</p>
// <p className="font-semibold">₹{p.price}</p>
// <Link className="text-indigo-600" to={`/plans/${p._id}`}>View Details</Link>
// </div>
// ))}
// </div>
// );
// }


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
