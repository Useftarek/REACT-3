import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Homepage from "../pages/homePage/Homepage";
import NotFound from "../components/notfound/NotFound";
import Product from "../pages/product/Product";
import SingleProudct from "../pages/product/SingleProudct";

 export const routing = createBrowserRouter ([
    {path:"/",element:<Layout/>, children:[
        {index:true, element:<Homepage/>},
        {path:"*", element:<NotFound/>},
        {path:"product", element:<Product/>},
        {path:"product/:category/:id/:title", element:<SingleProudct/>},
    ]},
  ])