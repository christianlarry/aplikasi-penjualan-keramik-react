import {createBrowserRouter, RouterProvider} from "react-router"

// Import page components
import HomePage from "../components/pages/home/HomePage"
import CatalogPage from "../components/pages/catalog/CatalogPage"

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage
    },
    {
      path: "/product-catalog",
      Component: CatalogPage
    }
  ]
)

const AppRouter = ()=>{
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter