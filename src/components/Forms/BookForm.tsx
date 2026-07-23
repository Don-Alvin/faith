"use client"

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar, Send, User, Mail, Phone, MapPin } from 'lucide-react'

interface BookFormProps {
  site?: string;
}

const BookForm = ({ site }: BookFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    date: '',
    site: site || ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='w-full space-y-6' method='POST' action="https://formsubmit.co/anadoomollo@zohomail.com">
      <div className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='name' className="flex items-center gap-2 text-foreground font-medium">
            <User className="h-4 w-4" />
            Full Name
          </Label>
          <Input
            className='border-border rounded-xl h-12 px-4 focus:border-accent focus:ring-ring/30 transition-all duration-300'
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
          <Label htmlFor='email' className="flex items-center gap-2 text-foreground font-medium">
            <Mail className="h-4 w-4" />
            Email Address
          </Label>
          <Input
            className='border-border rounded-xl h-12 px-4 focus:border-accent focus:ring-ring/30 transition-all duration-300'
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
          <Label htmlFor='number' className="flex items-center gap-2 text-foreground font-medium">
            <Phone className="h-4 w-4" />
            Phone Number
          </Label>
          <Input
            className='border-border rounded-xl h-12 px-4 focus:border-accent focus:ring-ring/30 transition-all duration-300'
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
          <Label htmlFor='date' className="flex items-center gap-2 text-foreground font-medium">
            <Calendar className="h-4 w-4" />
            Preferred Date
          </Label>
          <Input
            className='border-border rounded-xl h-12 px-4 focus:border-accent focus:ring-ring/30 transition-all duration-300'
            required
            name='date'
            type='date'
            id='date'
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='site' className="flex items-center gap-2 text-foreground font-medium">
            <MapPin className="h-4 w-4" />
            Property
          </Label>
          <Input
            className='border-border rounded-xl h-12 px-4 bg-secondary focus:border-accent focus:ring-ring/30 transition-all duration-300'
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

      <Button className='w-full gradient-gold text-accent-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.02]'>
        <Send className="mr-2 h-5 w-5" />
        Book Viewing
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        We&apos;ll contact you within 24 hours to confirm your appointment
      </p>
    </form>
  )
}

export default BookForm
