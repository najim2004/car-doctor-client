import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRouter";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />,
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/bookings?email=${params.id}`, {
            withCredentials: true,
          }),
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-services",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
