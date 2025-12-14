import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section */}
      <div className="relative bg-gray-900 h-[600px] flex items-center justify-center">
        {/* Placeholder for Background Image - You can add style={{ backgroundImage: url(...) }} here */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Push Your Limits. <span className="text-indigo-500">Break Barriers.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the ultimate fitness community. Access expert-led workout plans, nutrition guides, and track your progress in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Links to your Landing/Plans page */}
            <Link 
              to="/plans" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 text-lg shadow-lg"
            >
              Start Training
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition duration-200 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Stats Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-600 mt-2">Expert Trainers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">200+</h3>
            <p className="text-gray-600 mt-2">Workout Plans</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">10k+</h3>
            <p className="text-gray-600 mt-2">Active Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">4.9</h3>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
        </div>
      </div>

      {/* 3. Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4">Everything you need to reach your fitness goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                💪
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Training</h3>
              <p className="text-gray-600">
                Get workout plans tailored specifically to your body type, goals, and available equipment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🥗
              </div>
              <h3 className="text-xl font-bold mb-3">Nutrition Guidance</h3>
              <p className="text-gray-600">
                Fuel your body correctly with meal plans and macro tracking designed by nutritionists.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Visualize your journey with detailed analytics on your strength, weight, and consistency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Call to Action Banner */}
      <div className="bg-indigo-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Browse our catalog of plans and find the perfect match for your lifestyle.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Explore Plans
          </Link>
        </div>
      </div>
    </div>
  );
}