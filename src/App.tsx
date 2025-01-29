import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserActions from "./redux/user/userActions";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);

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
