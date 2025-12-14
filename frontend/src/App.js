import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrainerDashboard from "./pages/TrainerDashboard";
import PlanDetails from "./pages/PlanDetails";
import Feed from "./pages/Feed";
import TrainerProfile from "./pages/TrainerProfile";
import Home  from "./components/Home";

export default function App() {
return (
<BrowserRouter>
<Navbar />
{/* <Home /> */}
<Routes>
<Route path="/" element={<Home />} />
<Route path="/landing" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/trainer/dashboard" element={<TrainerDashboard />} />
<Route path="/plans/:id" element={<PlanDetails />} />
<Route path="/feed" element={<Feed />} />
<Route path="/trainer/:id" element={<TrainerProfile />} />
</Routes>
</BrowserRouter>
);
}