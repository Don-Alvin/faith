import { useListings } from '../hooks/useListings';
import MetaData from '../components/Meta/meta';
import { PulseLoader } from 'react-spinners'
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from '../Modal/BookModal';

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
            <CardContent className='flex justify-between w-full items-center'>
              <div className="text-sm font-semibold">
                 <p className="text-sm font-semibold">{listing.location}</p>
                 <span>{listing.Bedrooms}Br</span>
                 <p>{listing.Price}</p>
              </div>
              <div className="grid gap-2">
                <Button className='bg-secondary rounded text-white p-2 text-sm' onClick={handleBookMenu}>Book Viewing</Button>
                <Link className="text-sm medium" to={`listings/${listing.name}`}>View more details</Link>
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