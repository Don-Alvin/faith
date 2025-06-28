import { useState, useEffect } from 'react'
import { ChevronDown, Search, Play, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import img from '../../../public/images/hero2.jpg'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      style={{backgroundImage: `url(${img})`}} 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-yellow-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-200/50 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with enhanced animation */}
          <div className="space-y-4 mb-8">
            <h1 className={`font-bold text-white leading-tight transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}>
              Find Your
            </h1>
            
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Dream
              </span>
            </div>
            
            <h1 className={`font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}>
              Home
            </h1>
          </div>

          {/* Enhanced subtitle */}
          <p className={`text-white/90 font-light leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          } text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12`}>
            Discover exceptional properties that redefine luxury living. We specialize in connecting dreams with reality through expert guidance and unparalleled service.
          </p>

          {/* Enhanced CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Link to="/listings">
              <Button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 border-0">
                <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="group bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Tour
            </Button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1100 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center text-white/70 group cursor-pointer">
              <span className="text-sm font-medium mb-2 group-hover:text-white transition-colors">Discover More</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce group-hover:bg-white/70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Header