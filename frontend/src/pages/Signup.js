


// import { useState } from "react";
// import { api } from "../api";

// export default function Signup() {
//   const [form, setForm] = useState({});

//   const submit = async () => {
//     await api.post("auth/signup", form);
//     alert("Signup Successful");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
//           Signup
//         </h2>

//         <div className="space-y-4">
//           <input
//             placeholder="Name"
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           <input
//             placeholder="Email"
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           <input
//             placeholder="Password"
//             type="password"
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           <select
//             onChange={(e) => setForm({ ...form, role: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             <option value="user">User</option>
//             <option value="trainer">Trainer</option>
//           </select>

//           <button
//             onClick={submit}
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Signup
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/signup", form);
      alert("Signup Successful");

      // ✅ Redirect to login page
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Signup
        </h2>

        <div className="space-y-4">
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <select
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
          >
            <option value="user">User</option>
            <option value="trainer">Trainer</option>
          </select>

          <button
            onClick={submit}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
