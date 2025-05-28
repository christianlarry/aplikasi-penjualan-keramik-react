import {createBrowserRouter, RouterProvider} from "react-router"

// Import page components
import HomePage from "../components/pages/home/HomePage"
import CatalogPage from "../components/pages/catalog/CatalogPage"
import AllProductsPage from "../components/pages/catalog/all-products/AllProductsPage"

// Import layout
import MainLayout from "../components/layout/MainLayout"

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          Component: HomePage
        },
        {
          path: "catalog",
          Component: CatalogPage
        },
        {
          path: "catalog/all-products",
          Component: AllProductsPage
        }
      ]
    }
  ]
)

const AppRouter = ()=>{
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter