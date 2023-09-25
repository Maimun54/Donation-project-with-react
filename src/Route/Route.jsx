import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CatagoryDetails from "../Components/AlldonatinProjects/CatagoryDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json')
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/catagories/:id',
            element:<CatagoryDetails></CatagoryDetails>,
            loader:()=>fetch('/data.json')
        }
      ]
    },
    
  ]);

  export default router