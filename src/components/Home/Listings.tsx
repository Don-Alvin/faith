import { useState, useEffect, useRef } from "react";
import { PulseLoader } from "react-spinners";
import { useListings } from "../../hooks/useListings"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import BookModal from "../../Modal/BookModal";
import { Bed, DollarSign, MapPin, Eye, Calendar, ArrowRight, Home } from "lucide-react";

const Listings: React.FC = () => {
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
          <PulseLoader color='#0f172a' size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading exceptional properties...</p>
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
            <Card className='relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg hover-lift bg-white h-full group'>
              {/* Image Container */}
              <CardHeader className='relative p-0 overflow-hidden'>
                {listing.status && (
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
                    listing.status === 'under construction' 
                      ? 'bg-orange-500/90' 
                      : 'bg-green-500/90'
                  }`}>
                    {listing.status}
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    src={listing.imageUrl} 
                    alt={listing.name}
                    title={listing?.name}
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-white/90 backdrop-blur-sm text-gray-900 border-0 hover:bg-white rounded-lg"
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
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">{listing.name}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-slate-800 transition-colors line-clamp-2">
                        {listing.name}
                      </h3>
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Bed className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{listing.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-lg">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{listing.price}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <Button 
                    onClick={() => handleBookMenu(listing)} 
                    className='w-full bg-slate-900 hover:bg-slate-800 text-white py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-slate-900/25 transition-all duration-300 border-0'
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Viewing
                  </Button>
                  
                  <Link 
                    to={`listings/${listing.id}`}
                    className="group flex items-center justify-center w-full text-center py-2.5 text-slate-700 font-semibold hover:text-slate-900 transition-colors duration-300 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Home className="w-4 h-4" />
            Featured Properties
          </div>
          
          <h2 className="font-display font-bold text-gray-900 mb-6 text-4xl md:text-6xl">
            Exceptional <span className="text-gradient">Properties</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover handpicked properties that represent the pinnacle of luxury living and smart investment opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in">
          <Link to='/listings'>
            <Button className='btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0'>
              Explore All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
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