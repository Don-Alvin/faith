import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Listings from "./pages/Listings"
import Blogs from "./pages/Blogs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"
import Listing from "./pages/Listing"
import Blog from "./pages/Blog"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="listings" element={<Listings />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:title" element={<Blog />} />
        <Route path={`listings/:name`} element={<Listing />} />
      </Route>
    </Route>
  )
)

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
    
  )
}

export default App