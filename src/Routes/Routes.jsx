import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Review from "../pages/Review/Review";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "appointment",
          element: <Appointment></Appointment>
        },
        {
          path: "review",
          element: <Review></Review>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
      ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Register></Register>
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);

  export default router;