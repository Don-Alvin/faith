import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, MessageCircle } from "lucide-react"

const Contact: React.FC = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      description: "Mon-Fri 9am-6pm",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "anadoomollo@zohomail.com",
      description: "We'll respond within 24hrs",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Nairobi, Kenya",
      description: "Schedule an appointment",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", gradient: "from-slate-600 to-slate-800" },
    { icon: Award, number: "50+", label: "Properties Sold", gradient: "from-slate-600 to-slate-800" },
    { icon: Clock, number: "5★", label: "Client Rating", gradient: "from-slate-600 to-slate-800" }
  ]

  return (
    <section id="contactus" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="font-display font-bold text-gray-900 mb-6 text-4xl sm:text-5xl lg:text-6xl">
            Ready to Start Your 
            <span className="block text-gradient">
              Property Journey?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our expert team today. We're here to guide you through every step of your real estate experience with personalized service and professional expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-gray-900 text-3xl lg:text-4xl">
                Let's Connect
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're buying your first home, selling a property, or building an investment portfolio, our dedicated team is ready to turn your real estate goals into reality.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-700 font-medium mb-1">{item.content}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-white/80">We'll get back to you within 24 hours</p>
              </div>

              {/* Form */}
              <form className="p-8 space-y-6" method="POST" action="https://formsubmit.co/anadoomollo@zohomail.com">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor='name' className="text-gray-700 font-medium">Full Name</Label>
                    <Input 
                      className='border-gray-200 rounded-xl h-12 px-4 focus:border-slate-500 focus:ring-slate-500/20 transition-all duration-300 hover:border-gray-300 bg-white' 
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
                    <Label htmlFor='email' className="text-gray-700 font-medium">Email Address</Label>
                    <Input 
                      className='border-gray-200 rounded-xl h-12 px-4 focus:border-slate-500 focus:ring-slate-500/20 transition-all duration-300 hover:border-gray-300 bg-white' 
                      id='email' 
                      type='email' 
                      name='email' 
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor='number' className="text-gray-700 font-medium">Phone Number</Label>
                  <Input 
                    className='border-gray-200 rounded-xl h-12 px-4 focus:border-slate-500 focus:ring-slate-500/20 transition-all duration-300 hover:border-gray-300 bg-white' 
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
                  <Label htmlFor='message' className="text-gray-700 font-medium">Message</Label>
                  <Textarea 
                    className='border-gray-200 rounded-xl p-4 min-h-[120px] focus:border-slate-500 focus:ring-slate-500/20 transition-all duration-300 hover:border-gray-300 resize-none bg-white' 
                    placeholder='Tell us about your real estate needs...' 
                    name='message' 
                    id='message' 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <Button className='w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0'>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm pt-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Your information is secure and confidential</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact