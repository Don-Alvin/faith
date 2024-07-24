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
      <div className="w-full flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {listings?.map(listing => (
          <Card className='rounded w-full border flex flex-col gap-2 items-center p-2' key={listing.id}>
            <CardHeader className='w-full flex justify-center' >
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
                <div className="grid gap-3">
                  <Button onClick={handleBookMenu} className='bg-secondary rounded text-white p-2 text-sm w-full'>Book Viewing</Button>
                  <Link className="text-sm medium" to={`listings/${listing.id}`}>View more details</Link>
                </div>
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
    <section className='p-6 mt-10 w-full'>
      <MetaData title={'All Listings'} />
      <header className='my-2 flex font-semibold justify-between items-center'>
        <h2 className='text-gray-700 font-semibold text-xl'>Listings</h2>
      </header>
      {content}
    </section>
  )
}

export default Listings