import { PulseLoader } from "react-spinners";
import { useListings } from "../../hooks/useListings"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Listings = () => {

  const {isLoading, isError, error, listings} = useListings()

  let content;
  let limit = 3;

  if(isLoading) content = <PulseLoader color='#BB7F10' />

  if(listings) {
    content = (
      <div className="flex flex-col gap-2">
        {listings.slice(0,limit)?.map(listing => (
          <Card className='rounded w-full border flex flex-col gap-2 items-center p-2' key={listing.imageUrl}>
            <CardHeader className='w-full flex justify-center' >
              <img
                className="w-full h-[200px] object-cover rounded"
                src={listing.imageUrl} 
                alt={listing.name} 
              />
            </CardHeader>
            <CardContent className='flex items-center gap-4'>
              <div className="text-sm font-semibold">
                 <p className="text-sm font-semibold">{listing.name}</p>
                 <span>Bedrooms: {listing.Bedrooms}</span>
              </div>
             <Button className='bg-secondary rounded text-white p-2 text-sm'>Book Viewing</Button>
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
        <Link to='listings'>See all</Link>
      </div>
      <div>
        {content}
      </div>
    </section>
  )
}

export default Listings