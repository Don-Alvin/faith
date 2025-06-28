import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Calendar, Send, User, Mail, Phone, MapPin } from 'lucide-react'

const BookForm = ({site}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    date: '',
    site: site || ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='w-full space-y-6' method='POST' action="https://formsubmit.co/anadoomollo@zohomail.com">
      <div className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='name' className="flex items-center gap-2 text-gray-700 font-medium">
            <User className="h-4 w-4" />
            Full Name
          </Label>
          <Input 
            className='border-gray-300 rounded-xl h-12 px-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
            required 
            name='name' 
            type='text' 
            id='name'
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email' className="flex items-center gap-2 text-gray-700 font-medium">
            <Mail className="h-4 w-4" />
            Email Address
          </Label>
          <Input 
            className='border-gray-300 rounded-xl h-12 px-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
            required 
            name='email' 
            type='email' 
            id='email'
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='number' className="flex items-center gap-2 text-gray-700 font-medium">
            <Phone className="h-4 w-4" />
            Phone Number
          </Label>
          <Input 
            className='border-gray-300 rounded-xl h-12 px-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
            required 
            name='number' 
            type='tel' 
            id='number'
            placeholder="Enter your phone number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='date' className="flex items-center gap-2 text-gray-700 font-medium">
            <Calendar className="h-4 w-4" />
            Preferred Date
          </Label>
          <Input 
            className='border-gray-300 rounded-xl h-12 px-4 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
            required 
            name='date' 
            type='date' 
            id='date'
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='site' className="flex items-center gap-2 text-gray-700 font-medium">
            <MapPin className="h-4 w-4" />
            Property
          </Label>
          <Input 
            className='border-gray-300 rounded-xl h-12 px-4 bg-gray-100 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300' 
            required 
            name='site' 
            type='text' 
            id='site'
            value={formData.site}
            onChange={handleInputChange}
            readOnly={!!site}
          />
        </div>
      </div>

      <Button className='w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-[1.02]'>
        <Send className="mr-2 h-5 w-5" />
        Book Viewing
      </Button>

      <p className="text-center text-gray-500 text-sm">
        We'll contact you within 24 hours to confirm your appointment
      </p>
    </form>
  )
}

export default BookForm