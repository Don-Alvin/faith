import { useState, useEffect, useRef } from "react";
import { PulseLoader } from "react-spinners";
import { useListings } from "../../hooks/useListings"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import BookModal from "../../Modal/BookModal";
import { Bed, HandCoins, MapPin, Eye, Calendar } from "lucide-react";

const Listings = () => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)
  const [selectedListing, setSelectedListing] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const handleBookMenu = (listing = null) => {
    setSelectedListing(listing)
    setIsBookFormOpen(!isBookFormOpen)
  }

  const {isLoading, isError, error, listings} = useListings()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [listings])

  let content;
  let limit = 6;

  if(isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color='#BB7F10' size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading amazing properties...</p>
        </div>
      </div>
    )
  }

  if(listings) {
    content = (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {listings.slice(0,limit)?.map((listing, index) => (
          <div
            key={listing.id}
            ref={el => cardRefs.current[index] = el}
            data-index={index}
            className={`group transition-all duration-700 ${
              visibleCards.has(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className='relative overflow-hidden rounded-2xl border-0 shadow-xl hover-lift hover-glow bg-white'>
              {/* Image Container */}
              <CardHeader className='relative p-0 overflow-hidden'>
                {listing.status && (
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm ${
                    listing.status === 'under construction' 
                      ? 'bg-red-500/90' 
                      : 'bg-green-500/90'
                  }`}>
                    {listing.status}
                  </div>
                )}
                
                <div className="relative overflow-hidden group">
                  <img
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={listing.imageUrl} 
                    alt={listing.name}
                    title={listing?.name}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='p-6 space-y-6'>
                {/* Property Details */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">{listing.name}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
                        {listing.name}
                      </h3>
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                      <Bed className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{listing.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                      <HandCoins className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{listing.price}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <Button 
                    onClick={() => handleBookMenu(listing)} 
                    className='w-full btn-primary bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300'
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Viewing
                  </Button>
                  
                  <Link 
                    to={`listings/${listing.id}`}
                    className="block w-full text-center py-2 text-primary font-semibold hover:text-yellow-600 transition-colors duration-300 border border-primary/20 rounded-xl hover:border-yellow-600/30 hover:bg-yellow-50"
                  >
                    View Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Featured Properties
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Listings</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional properties that redefine luxury living. Each listing is carefully curated to meet your highest expectations.
          </p>
        </div>

        {/* Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in">
          <Link to='/listings'>
            <Button className='btn-primary bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
              Explore All Properties
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Book Modal */}
      {isBookFormOpen && (
        <BookModal 
          handleBookMenu={handleBookMenu} 
          site={selectedListing?.name} 
        />
      )}
    </section>
  )
}

export default Listings