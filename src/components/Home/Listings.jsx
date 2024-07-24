import { PulseLoader } from "react-spinners";
import { useListings } from "../../hooks/useListings"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookModal from "../../Modal/BookModal";
import { Bed, HandCoins, MapPin } from "lucide-react";

const Listings = () => {

  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  const handleBookMenu = () => {
    setIsBookFormOpen(!isBookFormOpen)
  }

  const {isLoading, isError, error, listings} = useListings()

  let content;
  let limit = 4;

  if(isLoading) content = <PulseLoader color='#BB7F10' />

  if(listings) {
    content = (
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {listings.slice(0,limit)?.map(listing => (
          <Card className='rounded w-full border flex flex-col gap-2 items-center p-2' key={listing.id}>
            <CardHeader className='w-full flex justify-center relative'>
              {listing.status && <p className={`absolute top-2 right-2 rounded p-1 text-sm text-white ${listing.status === 'under construction' ? 'bg-red-400' : 'bg-green-400'}`}>{listing.status}</p>}
              <img
                className="w-full h-[200px] md:h-[250px] object-cover rounded"
                src={listing.imageUrl} 
                alt={listing.name} 
              />
            </CardHeader>
            <CardContent className='flex flex-col justify-between w-full gap-3'>
              <div className="flex flex-col justify-between text-sm gap-3 ">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-gray-600" />
                    <p className="text-sm bg-gray-300 w-fit px-2 py-1 rounded">{listing.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="text-gray-600" />
                    <span className="bg-gray-300 w-fit px-2 rounded py-1">{listing.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HandCoins className="text-gray-600" />
                    <p className="bg-gray-300 w-fit px-2 rounded py-1">{listing.price}</p>
                  </div>
                </div> 
              <div className="grid gap-3">
                <Button onClick={handleBookMenu} className='bg-secondary rounded text-white p-2 text-sm'>Book Viewing</Button>
                <Link className="text-sm medium" to={`listings/${listing.id}`}>View more details</Link>
              </div>
              {isBookFormOpen && (
                <BookModal handleBookMenu={handleBookMenu} site={listing.name} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-4xl text-xl text-primary">Our <span className="text-secondary">Listings</span> </h2>
        <Link to='listings' className="font-semibold text-sm">View more properties</Link>
      </div>
      <div>
        {content}
      </div>
      <div className="w-full flex justify-center">
        <Link to='/listings'>
          <Button className='rounded bg-secondary text-white p-3'>View more listings</Button>
        </Link>
      </div>
      
    </section>
  )
}

export default Listings