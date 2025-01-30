import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserActions from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    await UserActions.getCurrentUser()(dispatch);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
