import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import { useState } from "react";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const [user, setUser] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <DashBoard user={user} />,
        },

        {
          path: '/create',
          element: <Create />,
        },
        {
          path: '/edit',
          element: <Edit />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
