import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Login from "../../Shared/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Details from "../../Pages/Details/Details";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import Register from "../../Shared/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Carts from "../../Pages/Carts/Carts";
import BrandProducts from "../../Pages/BrandProducts/BrandProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json")
      },
      {
        path: "/add-product",
        element: <PrivetRouter>
          <AddProduct></AddProduct>
        </PrivetRouter>
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>

      },
      {
        path: "/unique-brnad-products/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: "/product-details/:id",
        element: <PrivetRouter>
          <Details></Details>
        </PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/single-product/${params.id}`)
      },
      {
        path: "/update-product/:id",
        element: <PrivetRouter>
          <UpdateProduct></UpdateProduct>
        </PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/single-product/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>

      },
      {
        path: "/carts",
        element: <PrivetRouter>
          <Carts></Carts>
        </PrivetRouter>,
        loader: () => fetch(`http://localhost:5000/cart`)
      },

    ]

  },
]);

export default router;