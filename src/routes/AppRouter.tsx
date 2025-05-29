import { createBrowserRouter, RouterProvider } from "react-router"

// Import page components
import HomePage from "../components/pages/home/HomePage"
import CatalogPage from "../components/pages/catalog/CatalogPage"
import AllProductsPage from "../components/pages/catalog/all-products/AllProductsPage"
import BestSellerPage from "../components/pages/catalog/best-seller/BestSellerPage"
import NewArrivalsPage from "../components/pages/catalog/new-arrivals/NewArrivalsPage"
import DiscountPage from "../components/pages/catalog/discount/DiscountPage"

// Import layout
import MainLayout from "../components/layout/MainLayout"

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "catalog", Component: CatalogPage },
        { path: "catalog/all-products", Component: AllProductsPage },
        { path: "catalog/best-seller", Component: BestSellerPage },
        { path: "catalog/new-arrivals", Component: NewArrivalsPage },
        { path: "catalog/discount", Component: DiscountPage }
      ]
    }
  ]
)

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter