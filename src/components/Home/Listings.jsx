import { PulseLoader } from "react-spinners";
import { useListings } from "../../hooks/useListings"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Listings = () => {

  const {isLoading, isError, error, listings} = useListings()

  let content;
  let limit = 4;

  if(isLoading) content = <PulseLoader color='#BB7F10' />

  if(listings) {
    content = (
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {listings.slice(0,limit)?.map(listing => (
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
                <Button className='bg-secondary rounded text-white p-2 text-sm'>Book Viewing</Button>
                <Link className="text-sm medium">View more details</Link>
              </div>
             
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