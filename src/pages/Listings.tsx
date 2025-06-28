import { useState } from 'react';
import { useListings } from '@/hooks/useListings';
import MetaData from '@/components/Meta/meta';
import { PulseLoader } from 'react-spinners';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookModal from '@/Modal/BookModal';
import { Bed, HandCoins, MapPin, Calendar } from 'lucide-react';
import { Listing } from '@/types';

const Listings: React.FC = () => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const handleBookMenu = (listing: Listing | null = null) => {
    setSelectedListing(listing);
    setIsBookFormOpen(!isBookFormOpen);
  };

  const { isLoading, error, listings, isError } = useListings();

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color="#BB7F10" size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading properties...</p>
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

  if (listings) {
    content = (
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card 
            key={listing.id} 
            className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover-lift hover-glow bg-white transition-all duration-300"
          >
            <CardHeader className="relative p-0 overflow-hidden">
              {listing.status && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm ${
                  listing.status === 'under construction' 
                    ? 'bg-red-500/90' 
                    : 'bg-green-500/90'
                }`}>
                  {listing.status}
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  src={listing.imageUrl} 
                  alt={listing.name}
                  title={listing.name}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium truncate">{listing.location || listing.name}</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {listing.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                    <Bed className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{listing.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-100 px-2 sm:px-3 py-1 rounded-full">
                    <HandCoins className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm font-semibold text-green-700 truncate">{listing.price}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <Button 
                  onClick={() => handleBookMenu(listing)} 
                  className="w-full btn-primary bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Viewing
                </Button>
                
                <Link 
                  to={`/listings/${listing.id}`}
                  className="block w-full text-center py-2 text-primary font-semibold hover:text-yellow-600 transition-colors duration-300 border border-primary/20 rounded-xl hover:border-yellow-600/30 hover:bg-yellow-50 text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <section className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <MetaData 
        title="Property Listings" 
        description="Browse our extensive collection of premium properties in Kenya. Find your perfect home, investment property, or rental with Lamona Realtors."
        keywords="property listings Kenya, houses for sale, real estate properties, buy property Kenya, Nairobi properties"
        url="/listings"
      />
      
      <header className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          Featured Properties
        </div>
        
        <h1 className="heading-responsive font-bold text-gray-900 mb-4 sm:mb-6">
          Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Listings</span>
        </h1>
        
        <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover exceptional properties that redefine luxury living. Each listing is carefully curated to meet your highest expectations.
        </p>
      </header>

      <div className="mb-12 sm:mb-16">
        {content}
      </div>

      {isBookFormOpen && selectedListing && (
        <BookModal 
          handleBookMenu={handleBookMenu} 
          site={selectedListing.name} 
        />
      )}
    </section>
  );
};

export default Listings;