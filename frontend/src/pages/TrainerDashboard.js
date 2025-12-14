import { useEffect, useState, useContext } from "react";
import { api } from "../api";
import { AuthContext } from "../context/AuthContext";

export default function TrainerDashboard() {
  const { token, user } = useContext(AuthContext);

  const [plans, setPlans] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
  });

  /* =========================
     FETCH TRAINER PLANS
  ========================= */
//   const fetchPlans = async () => {
//     const res = await api.get("/plans", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (!user) {
//     setPlans([]);
//     return;
//   }
//     // only this trainer's plans
//     const myPlans = res.data.filter(
//       (p) => p.trainer?._id === user.id
//     );

//     setPlans(myPlans);
//   };

//   useEffect(() => {
//     fetchPlans();
//   }, []);
const fetchPlans = async () => {
  const res = await api.get("/plans", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const myPlans = res.data;

  setPlans(myPlans);
};

useEffect(() => {
  
    fetchPlans();
  
}, [user, token]);



  /* =========================
     CREATE / UPDATE PLAN
  ========================= */
  const submitPlan = async () => {
    const payload = {
      ...form,
      price: Number(form.price),
      duration: Number(form.duration),
    };

    if (editingId) {
      await api.put(`/plans/${editingId}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Plan Updated");
    } else {
      await api.post("/plans", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Plan Created");
    }

    setForm({ title: "", description: "", price: "", duration: "" });
    setEditingId(null);
    fetchPlans();
  };

  /* =========================
     EDIT PLAN
  ========================= */
  const editPlan = (plan) => {
    setEditingId(plan._id);
    setForm({
      title: plan.title,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
    });
  };

  /* =========================
     DELETE PLAN
  ========================= */
  const deletePlan = async (id) => {
    if (!window.confirm("Delete this plan?")) return;

    await api.delete(`/plans/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Plan Deleted");
    fetchPlans();
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT: PLANS LIST (LIKE LANDING) */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-bold">My Fitness Plans</h2>

        {plans.length === 0 && (
          <p className="text-gray-500">No plans created yet.</p>
        )}

        {plans.map((p) => (
          <div
            key={p._id}
            className="border rounded-lg p-4 shadow flex justify-between"
          >
            <div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600">
                ₹{p.price} • {p.duration} days
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => editPlan(p)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deletePlan(p._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: CREATE / EDIT FORM */}
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-bold mb-4">
          {editingId ? "Edit Plan" : "Create Plan"}
        </h2>

        <input
          className="input mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="input mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="number"
          className="input mb-2"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="number"
          className="input mb-3"
          placeholder="Duration (days)"
          value={form.duration}
          onChange={(e) =>
            setForm({ ...form, duration: e.target.value })
          }
        />

        <button
          onClick={submitPlan}
          className="bg-green-600 text-white px-4 py-2 w-full rounded"
        >
          {editingId ? "Update Plan" : "Create Plan"}
        </button>
      </div>
    </div>
  );
}