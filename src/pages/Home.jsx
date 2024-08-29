import Listings from "../components/Home/Listings"
import Header from "../components/Home/Header"
import MetaData from "../components/Meta/meta"
import Blogs from "../components/Home/Blogs"
import Contact from "../components/Home/Contact"

const Home = () => {
  return (
    <div>
      <MetaData title={'Find your dream house'} name='description' content='Number one place to find the best deals in home ownership and renting.' />
      <Header />
      <Listings />
      <Blogs />
      <Contact />
    </div>
  )
}

export default Home