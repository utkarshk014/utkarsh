import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
