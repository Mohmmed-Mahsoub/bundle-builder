import MainLoader from "@/components/mainLoader/mainLoader.component"
import { lazy, Suspense } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

// Lazy loaded pages
const Checkout = lazy(() => import("@/pages/checkout/checkout.page"))
const NotFound = lazy(() => import("@/pages/notFound/notFound.page"))

const PageLoader = () => <MainLoader />

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/checkout" replace />,
  },
  {
    path: "/checkout",
    element: withSuspense(Checkout),
  },
  {
    path: "*",
    element: withSuspense(NotFound),
  },
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
