import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  AllCarPage,
  HomePage,
  ProductCreationPage,
  SignUpPage,
  UserCarPage,
  LoginPage,
  CarDetailPage,
  EditProductPage,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/all-car", element: <AllCarPage /> },
      {
        path: "/user-car",
        element: (
          <ProtectedRoute authentication={true}>
            <UserCarPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product-creation",
        element: (
          <ProtectedRoute authentication={true}>
            <ProductCreationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute authentication={false}>
            <SignUpPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute authentication={false}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/car/:carId",
        element: (
          <ProtectedRoute authentication={true}>
            <CarDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/car/edit/:carId",
        element: (
          <ProtectedRoute authentication={true}>
            <EditProductPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
