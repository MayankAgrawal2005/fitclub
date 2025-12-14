
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">FitPlanHub</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>

        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/landing">Feed</Link>

            {role === "trainer" && (
              <Link to="/trainer/dashboard">Dashboard</Link>
            )}

            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
