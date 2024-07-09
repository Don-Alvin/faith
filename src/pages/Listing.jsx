import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { Separator } from '../components/ui/separator'
import { useListings } from '../hooks/useListings'
import { useParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { Card, CardContent } from '../components/ui/card'

const Listing = () => {

  const { id } = useParams()

  const { isLoading, error, listings, isError } = useListings()

  let content;

  if(isLoading) {
    content = <PulseLoader color='#BB7F10' />
  }else if(isError) {
    content = <p>Oooop! We encountered an error: {error}</p>
  }

  const listing = listings?.find(listing => listing.id === parseInt(id));

  if(listing) {
    content = (
      <article className='grid gap-2'>
        <h4 className='font-semibold'>{listing.name}</h4>
        <Separator />
        <img
          src={listing.imageUrl} 
          alt={listing.title}
          className='rounded w-full h-[200px] object-cover' 
        />
        <Separator />
        <p>{listing.description}</p>
        <div>
        <Carousel className="w-full max-w-xs">
          <CarouselContent orientation='horizontal'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 border rounded">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </article>
    )
  } else {
    content = <p>Listing not found</p>
  }

  return (
    <div className='relative top-20 p-6'>
      {content}
    </div>
  )
}

export default Listing