import Listings from "../components/Home/Listings"
import Header from "../components/Home/Header"
import MetaData from "../components/Meta/meta"

const Home = () => {
  return (
    <div>
      <MetaData title={'Find your dream house'} />
      <Header />
      <Listings />
    </div>
  )
}

export default Home