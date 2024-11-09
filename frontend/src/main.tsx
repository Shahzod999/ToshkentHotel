import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Error from "./components/Actions/Error.tsx";
import Rooms from "./pages/Rooms.tsx";
import Contact from "./pages/Contact.tsx";
import Facilities from "./pages/Facilities.tsx";
import Auth from "./pages/Auth.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import Admin from "./pages/Admin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
