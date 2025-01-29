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
  ProductDetailPage,
  SignUpPage,
  UserCarPage,
  LoginPage,
} from "./pages";

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
      { path: "/user-car", element: <UserCarPage /> },
      { path: "/product-creation", element: <ProductCreationPage /> },
      { path: "/product-detail", element: <ProductDetailPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
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
