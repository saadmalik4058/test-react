import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Company from "./Components/Pages/Company";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Company",
      element: <Company />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
