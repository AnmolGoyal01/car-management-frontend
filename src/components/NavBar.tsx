import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserActions from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (userState?.status === true) {
      console.log(userState);
    }
  }, [userState?.status]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = async () => {
    await UserActions.logoutUser()(dispatch);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Cars",
      link: "/user-car",
    },
    {
      name: "All Cars",
      link: "/all-car",
    },
    {
      name: "Create Product",
      link: "/product-creation",
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-bold text-gray-900 dark:text-white hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          CAR MANAGER
        </div>

        {/* Navigation Links */}
        {menuItems &&
          menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item?.link}
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-200 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-gray-800"
                }`
              }
            >
              {item?.name}
            </NavLink>
          ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>

        {/* User Section or Login/Signup */}
        <div className="flex items-center space-x-4">
          {(userState?.status === true && userState?.user) ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {userState?.user?.data?.userName?.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-700 dark:text-gray-200 hover:text-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <NavLink
                to="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
