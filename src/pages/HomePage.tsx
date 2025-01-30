import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const userState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userState?.status) setLoggedIn(true);
    else setLoggedIn(false);
    setLoading(false);
  }, [userState]);

  const getStarted = () => {
    if (loggedIn) {
      navigate("/user-car");
    } else {
      navigate("/signup");
    }
  };

  if (loading)
    return <div className="w-full h-full text-center">Loading...</div>;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Car Manager</h1>
          <p className="text-lg mb-8">
            Manage, track, and control all your vehicles with ease. Your car
            management system, designed for efficiency.
          </p>
          <span
            onClick={getStarted}
            className="bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Get Started
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Easy Car Management
              </h3>
              <p className="text-gray-600">
                Quickly add, update, and delete your car entries with our free
                app
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Search & Filter among Cars
              </h3>
              <p className="text-gray-600">
                Search and pick the car you want to view or manage with our
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Secure & Fast
              </h3>
              <p className="text-gray-600">
                Experience a secure and fast system that ensures your data is
                protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Manage Your Cars?
          </h2>
          <p className="mb-8">
            Sign up now to get started and manage your vehicles effortlessly.
          </p>
          <span
            onClick={getStarted}
            className="bg-blue-700 hover:bg-blue-600 hover:cursor-pointer text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Join Us Now
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
