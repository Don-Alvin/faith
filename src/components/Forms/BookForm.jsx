import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const BookForm = ({site}) => {
  return (
    <form className='w-full flex flex-col items-center gap-4' action="mailto:emailid@example.com">
        <div className='w-full md:w-[60%] flex flex-col gap-4'>
          <div  className='grid gap-2 w-full'>
            <Label htmlFor='name'>Enter your full name</Label>
            <Input className='border border-black rounded h-10 p-1' required name='name' type='text' id='name' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='name'>Enter your email</Label>
            <Input className='border border-black rounded h-10 p-1' required name='email' type='email' id='email' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='date'>Pick date of visit</Label>
            <Input className='border border-black rounded h-10 p-1' required name='date' type='date' id='date' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='site'>Site to visit</Label>
            <Input className='border border-black rounded h-10 p-1' value={site} required name='site' type='site' id='site' />
        </div>  
        </div>
        <Button className='bg-secondary text-white p-2 rounded' value='send'>Submit</Button>
    </form>
  )
}

export default BookForm