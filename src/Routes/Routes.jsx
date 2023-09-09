import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyAppointment from "../pages/MyAppointment/MyAppointment";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Review from "../pages/Review/Review";
import PrivateRoute from "./PrivateRoute";

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
          element: <PrivateRoute><Appointment></Appointment></PrivateRoute>,
          loader:() => fetch("https://doctor-portal-server-phi-one.vercel.app/appointment")
        },
        {
          path: "review",
          element: <Review></Review>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: "myappointment",
          element: <PrivateRoute><MyAppointment></MyAppointment></PrivateRoute>
        },
        {
          path: "appointment/:id",
          element: <Booking></Booking>,
          loader: ({params}) => fetch(`https://doctor-portal-server-phi-one.vercel.app/appointment/${params.id}`)
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