import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contactus')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 750 030 357",
      description: "Mon-Fri 9am-6pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "anadoomollo@zohomail.com",
      description: "We'll respond within 24hrs"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Nairobi, Kenya",
      description: "Schedule an appointment"
    }
  ]

  return (
    <section id="contactus" className="py-20 bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Get In Touch
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Find Your 
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Dream Home?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your real estate goals. Our expert team is here to guide you through every step of your property journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="font-display text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're buying, selling, or investing, we're here to make your real estate dreams a reality.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-yellow-400 font-medium mb-1">{item.content}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className={`grid grid-cols-3 gap-4 pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">5★</div>
                <div className="text-gray-400 text-sm">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form className="glass p-8 rounded-3xl space-y-6" method="POST" action="https://formsubmit.co/anadoomollo@zohomail.com">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor='name' className="text-white font-medium">Full Name</Label>
                  <Input 
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl p-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
                    id='name' 
                    type='text' 
                    name='name' 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor='email' className="text-white font-medium">Email Address</Label>
                  <Input 
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl p-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
                    id='email' 
                    type='email' 
                    name='email' 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor='number' className="text-white font-medium">Phone Number</Label>
                  <Input 
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl p-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
                    id='number' 
                    type='tel' 
                    name='number' 
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor='message' className="text-white font-medium">Message</Label>
                  <Textarea 
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl p-4 min-h-[120px] focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
                    placeholder='Tell us about your real estate needs...' 
                    name='message' 
                    id='message' 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <Button className='w-full btn-primary bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-[1.02]'>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm pt-4">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Your information is secure and confidential</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact