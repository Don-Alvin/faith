import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Listings from "./pages/Listings"
import Blog from "./pages/Blog"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App