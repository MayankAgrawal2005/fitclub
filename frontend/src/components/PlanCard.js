// import { Link } from "react-router-dom";


// export default function PlanCard({ plan }) {
// return (
// <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
// <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
// <p className="text-sm text-gray-600">Trainer: {plan.trainer?.name}</p>
// <p className="font-semibold mt-2">₹{plan.price}</p>
// <Link
// to={`/plans/${plan._id}`}
// className="inline-block mt-3 text-indigo-600 font-medium"
// >
// View Details →
// </Link>
// </div>
// );
// }

// import { Link } from "react-router-dom";

// export default function PlanCard({ plan }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//       <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
//       <p className="text-sm text-gray-600">
//         Trainer: {plan.trainer?.name}
//       </p>
//       <p className="font-semibold mt-2">₹{plan.price}</p>

//       <Link
//         to={`/plans/${plan._id}`}
//         className="inline-block mt-3 text-indigo-600 font-medium"
//       >
//         View Details →
//       </Link>
//     </div>
//   );
// }

// // import { Link } from "react-router-dom";

// // export default function PlanCard({ plan }) {
// //   return (
// //     <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">

// //       {/* Top circle indicator */}
// //       <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
// //         <div className="w-3 h-3 rounded-full bg-gray-700"></div>
// //       </div>

// //       {/* Plan title */}
// //       <h3 className="text-xl font-semibold text-gray-900 mb-1">
// //         {plan.title}
// //       </h3>

// //       <p className="text-sm text-gray-500 mb-4">
// //         Trainer: {plan.trainer?.name || "Expert Trainer"}
// //       </p>

// //       {/* Price */}
// //       <div className="mb-5">
// //         <span className="text-3xl font-bold text-gray-900">
// //           ₹{plan.price}
// //         </span>
// //         <span className="text-sm text-gray-500">
// //           {" "} / {plan.duration} days
// //         </span>
// //       </div>

// //       {/* Button */}
// //       <Link
// //         to={`/plans/${plan._id}`}
// //         className="block text-center w-full border border-gray-300 rounded-lg py-2.5 font-medium text-gray-900 hover:bg-gray-100 transition"
// //       >
// //         Subscribe Now
// //       </Link>

// //       {/* Divider */}
// //       <hr className="my-6 border-gray-200" />

// //       {/* Features */}
    
// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";
// export default function PlanCard({ plan }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//       <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
//       <p className="text-sm text-gray-600">
//         Trainer: {plan.trainer?.name}
//       </p>
//       <p className="font-semibold mt-2">₹{plan.price}</p>

//       <Link
//         to={`/plans/${plan._id}`}
//         className="inline-block mt-3 text-indigo-600 font-medium"
//       >
//         Subscribe Now →
//       </Link>
//     </div>
//   );
// }

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
