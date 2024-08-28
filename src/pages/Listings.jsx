import { useListings } from '../hooks/useListings';
import MetaData from '../components/Meta/meta';
import { PulseLoader } from 'react-spinners'
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from '../Modal/BookModal';
import { Bed, HandCoins, MapPin } from 'lucide-react';

const Listings = () => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  const handleBookMenu = () => {
    setIsBookFormOpen(!isBookFormOpen)
  }

  const { isLoading, error, listings, isError } = useListings()

  let content;

  if(isLoading) content = <PulseLoader color='#BB7F10' />
  if(isError) content = <p>Oooop! We encountered an error: {error}</p>

  if(listings) {
    content = (
      <div className="flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {listings.map(listing => (
          <Card className='rounded w-full border-2 shadow-xl flex flex-col gap-2 items-center py-4 px-2' key={listing.id}>
            <CardHeader className='w-full flex justify-center relative'>
              {listing.status && <p className={`absolute top-2 right-2 rounded p-1 text-sm text-white ${listing.status === 'under construction' ? 'bg-red-400' : 'bg-green-400'}`}>{listing.status}</p>}
              <img
                className="w-full h-[200px] md:h-[300px] object-cover rounded"
                src={listing.imageUrl} 
                alt={listing.name} 
              />
            </CardHeader>
            <CardContent className='flex flex-col justify-between w-full gap-6'>
              <div className="flex flex-col justify-between text-sm gap-4 ">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-gray-600" />
                    <p className="text-lg bg-gray-300 font-medium w-fit px-2 py-1 rounded">{listing.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="text-gray-600" />
                    <span className="bg-gray-300 text-lg font-medium w-fit px-2 rounded py-1">{listing.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HandCoins className="text-gray-600" />
                    <p className="bg-gray-300 text-lg font-medium w-fit px-2 rounded py-1">{listing.price}</p>
                  </div>
                </div> 
              <div className="grid gap-3">
                <Button onClick={handleBookMenu} className='bg-secondary rounded text-white py-3 text-lg'>Book Viewing</Button>
                <Link className="text-lg font-medium w-fit border-b-2 border-gray-700 p-0.5" to={`listings/${listing.id}`}>View more details</Link>
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
    <section className='p-6 md:px-20 mt-10 md:mt-24 w-full'>
      <MetaData title={'All Listings'} />
      <header className='my-2 md:my-4 flex font-semibold justify-center items-center'>
        <h2 className="font-semibold text-xl md:text-4xl text-primary">Our <span className="text-secondary">Listings</span> </h2>
      </header>
      {content}
    </section>
  )
}

export default Listings