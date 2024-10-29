import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Error from "./components/Error.tsx";
import Rooms from "./pages/Rooms.tsx";
import Contact from "./pages/Contact.tsx";
import Service from "./pages/Service.tsx";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
