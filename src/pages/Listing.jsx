import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Separator } from '../components/ui/separator';
import { useListings } from '../hooks/useListings';
import { Card, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { BadgeCheck, MapPin } from 'lucide-react';
import MetaData from '../components/Meta/meta';

const Listing = () => {
  const { id } = useParams();
  const { isLoading, error, listings, isError } = useListings();
  const [currentImage, setCurrentImage] = useState(null);

  let content;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-full">
        <PulseLoader color="#BB7F10" />
      </div>
    );
  } else if (isError) {
    content = <p className="text-red-500">Oooop! We encountered an error: {error}</p>;
  }
  
  const listing = listings?.find((listing) => listing.id === parseInt(id));

    if (listing) {
      if (!currentImage) {
        setCurrentImage(listing.imageUrl);
      }

      const changeImage = (imageUrl) => {
        setCurrentImage(imageUrl);
      };

      content = (
        <article className="flex flex-col md:flex-row gap-2 w-full">
          <section className='relative md:w-[70%] md:flex flex-col gap-2'>
            <div className='flex flex-col gap-2 md:flex-row justify-between items-start md:items-center'>
              <div className='grid gap-2'>
                <h1 className="text-2xl font-semibold">{listing.name}</h1>
                <p className='flex gap-2 items-center'>
                  <MapPin />
                  <span>{listing.location}</span>
                </p>
              </div>
              <h4 className='text-2xl font-semibold'>{listing.price}</h4>
            </div>
            <div className='relative'>
              <p className={`absolute right-1 top-1 w-fit rounded p-1 text-white ${listing.status === `under construction` ? 'bg-red-400' : 'bg-green-400'}`}>{listing.status}</p>
             <img
                src={currentImage}
                alt={listing.title}
                className="rounded w-full h-[200px] md:h-[400px] object-cover"
              /> 
            </div>
            <Separator />
            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent className='flex gap-1' >
                   {listing.moreImages && listing.moreImages.map((image, index) => (
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={index}>
                      <div className="p-1">
                        <Card className='w-[200px] md:w-[300px] md:overflow-hidden'>
                          <CardContent className="w-full rounded h-20 md:h-[200px]">
                            <img
                              src={image.imageUrl}
                              alt={`image-${index}`}
                              onClick={() => changeImage(image.imageUrl)}
                              className="rounded border border-gray-400 shadow cursor-pointer w-full h-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
          <section className='md:flex md:w-[30%]'>
            <form className='w-full flex flex-col md:mt-12 items-center gap-4' action="https://formsubmit.co/anadoomollo@zohomail.com">
              <h5 className='font-semibold'>Book viewing</h5>
              <div className='w-full md:w-[60%] flex flex-col gap-4'>
                <div  className='grid gap-2 w-full'>
                  <Label htmlFor='name'>Enter your full name</Label>
                  <Input className='border border-black rounded h-10 p-1' required name='name' type='text' id='name' />
                </div>
                <div  className='grid gap-2 w-full'>
                  <Label htmlFor='name'>Enter your email</Label>
                  <Input className='border border-black rounded h-10 p-1' required name='email' type='email' id='email' />
                </div>
                <div  className='grid gap-2 w-full'>
                  <Label htmlFor='date'>Pick date of visit</Label>
                  <Input className='border border-black rounded h-10 p-1' required name='date' type='date' id='date' />
                </div>
                <div  className='grid gap-2 w-full'>
                  <Label htmlFor='site'>Site to visit</Label>
                  <Input className='border border-black rounded h-10 p-1' value={listing.name} required name='site' type='site' id='site' />
                </div>  
              </div>
              <Button className='bg-secondary text-white p-2 rounded'>Book viewing</Button>
            </form>
          </section>
        </article>
      );
    } else {
      content = <PulseLoader color="#BB7F10" />;
    }

  return(
     <div className="relative top-10 mb-5 p-6 overflow-hidden flex flex-col gap-2">
      <MetaData title={listing?.name} />
      {content}
      {listing?.description && (
        <div>
          <h2>Description</h2>
          <p>{listing?.description}</p>
        </div>
      )}
      {listing?.roi && (
        <p>Average return on investment is <span className='font-semibold'>{listing.roi}.</span></p>
      )}
      {listing?.payment_plan && (
        <p><span className='font-semibold'>Payment plan: </span> {listing.payment_plan}</p>
      )}
      <div className='grid gap-2 mb-4'>
        {listing?.Ammenities && <h5 className='font-semibold text-xl'>Amenities</h5>}
        <div className='flex flex-col md:flex-row flex-wrap gap-3 '>
          {listing?.Ammenities && listing.Ammenities.map(amenity => (
            <p className='flex gap-2 bg-gray-300 w-fit p-2 rounded-lg'>
              <BadgeCheck color='yellow' />
              <span>{amenity}</span>
            </p>
            ))}
        </div>
      </div>
    </div>
  )
};

export default Listing;
