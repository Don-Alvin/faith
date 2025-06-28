import { createPortal } from 'react-dom';
import { X, Calendar, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import BookForm from '../components/Forms/BookForm';

interface BookModalProps {
  handleBookMenu: () => void;
  site?: string;
}

const BookModal: React.FC<BookModalProps> = ({handleBookMenu, site}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return createPortal (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={handleBookMenu}
      />
      
      {/* Modal */}
      <div className={`absolute inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-medium opacity-90">Premium Service</span>
                </div>
                <h2 className="font-display text-3xl font-bold">Schedule Your Viewing</h2>
                <p className="text-white/80 text-lg">Experience luxury living firsthand</p>
                {site && (
                  <div className="flex items-center gap-2 mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{site}</span>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleBookMenu}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-2xl mx-auto">
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600 text-sm">Choose a time that works for you</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Guide</h3>
                  <p className="text-gray-600 text-sm">Professional agent assistance</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Detailed Tour</h3>
                  <p className="text-gray-600 text-sm">Comprehensive property walkthrough</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 border border-gray-100">
                <BookForm site={site} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')!
  )
}

export default BookModal