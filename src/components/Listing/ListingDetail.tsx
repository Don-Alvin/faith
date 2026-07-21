"use client";

import { useState } from 'react';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { useListings } from '@/hooks/useListings';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BadgeCheck, MapPin, ArrowLeft, Bed, Bath, Square, Calendar } from 'lucide-react';

interface ListingDetailProps {
  id: string;
}

const ListingDetail = ({ id }: ListingDetailProps) => {
  const { isLoading, error, listings, isError } = useListings();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    site: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color="#101a15" size={15} />
          <p className="mt-4 text-muted-foreground font-medium">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">
          Oops! We encountered an error: {error?.message}
        </p>
      </div>
    );
  }

  const listing = listings?.find((listing) => listing.id === parseInt(id || '0'));

  if (listing) {
    if (!currentImage) {
      setCurrentImage(listing.imageUrl);
    }

    const changeImage = (imageUrl: string) => {
      setCurrentImage(imageUrl);
    };

    content = (
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/listings">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to Listings
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Property Details - Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Property Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{listing.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{listing.location || listing.name}</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#b07d10]">
                {listing.price}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className={`absolute right-2 top-2 sm:right-4 sm:top-4 z-10 px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm ${
                listing.status === 'under construction' ? 'bg-orange-500/90' : 'bg-green-500/90'
              }`}>
                {listing.status}
              </div>
              <img
                src={currentImage ?? undefined}
                alt={listing.name}
                className="rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover shadow-xl"
                loading="eager"
              />
            </div>

            <Separator />

            {/* Image Gallery */}
            {listing.moreImages && listing.moreImages.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="flex gap-2 sm:gap-4">
                    {listing.moreImages.map((image, index) => (
                      <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                          <CardContent className="p-0">
                            <img
                              src={image.imageUrl}
                              alt={`${listing.name} - Image ${index + 1}`}
                              onClick={() => changeImage(image.imageUrl)}
                              className="w-full h-20 sm:h-24 lg:h-32 object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </div>
            )}

            {/* Property Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-secondary rounded-xl p-4 text-center">
                <Bed className="h-6 w-6 mx-auto mb-2 text-accent-foreground" />
                <div className="font-semibold text-foreground">{listing.bedrooms}</div>
                <div className="text-sm text-muted-foreground">Bedrooms</div>
              </div>
              <div className="bg-secondary rounded-xl p-4 text-center">
                <Bath className="h-6 w-6 mx-auto mb-2 text-accent-foreground" />
                <div className="font-semibold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Bathrooms</div>
              </div>
              <div className="bg-secondary rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                <Square className="h-6 w-6 mx-auto mb-2 text-accent-foreground" />
                <div className="font-semibold text-foreground">1,200</div>
                <div className="text-sm text-muted-foreground">Sq Ft</div>
              </div>
            </div>
          </div>

          {/* Booking Form - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
                <div className="gradient-primary p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Book a Viewing</h2>
                  <p className="text-white/70">Schedule your personal tour</p>
                </div>

                <CardContent className="p-6">
                  <form className="space-y-4" method="POST" action="https://formsubmit.co/anadoomollo@zohomail.com">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                      <Input
                        className="border-border rounded-xl h-12 focus:border-accent focus:ring-ring/30"
                        required
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                      <Input
                        className="border-border rounded-xl h-12 focus:border-accent focus:ring-ring/30"
                        required
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-medium">Preferred Date</Label>
                      <Input
                        className="border-border rounded-xl h-12 focus:border-accent focus:ring-ring/30"
                        required
                        name="date"
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="site" className="text-foreground font-medium">Property</Label>
                      <Input
                        className="border-border rounded-xl h-12 bg-secondary focus:border-accent focus:ring-ring/30"
                        required
                        name="site"
                        type="text"
                        id="site"
                        value={listing.name}
                        readOnly
                      />
                    </div>

                    <Button className="w-full gradient-gold text-accent-foreground py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Viewing
                    </Button>
                  </form>

                  <p className="text-center text-muted-foreground text-sm mt-4">
                    We&apos;ll contact you within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          {listing.description && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">{listing.description}</p>
            </div>
          )}

          {listing.roi && (
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Investment Opportunity</h3>
              <p className="text-green-800">
                Average return on investment is <span className="font-bold">{listing.roi}</span>
              </p>
            </div>
          )}

          {listing.payment_plan && (
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Payment Plan</h3>
              <p className="text-blue-800">{listing.payment_plan}</p>
            </div>
          )}

          {listing.Ammenities && listing.Ammenities.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {listing.Ammenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 bg-secondary p-4 rounded-xl">
                    <BadgeCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else if (!isLoading && !listing) {
    content = (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h2>
        <p className="text-muted-foreground mb-8">The property you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/listings">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Browse All Properties
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      {content}
    </div>
  );
};

export default ListingDetail;
