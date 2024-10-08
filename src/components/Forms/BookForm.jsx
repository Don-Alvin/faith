import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import 'react-international-phone/style.css';

const BookForm = ({site}) => {

  return (
    <form className='w-full flex flex-col items-center gap-4' method= 'POST' action="https://formsubmit.co/anadoomollo@zohomail.com">
        <div className='w-full md:w-[60%] flex flex-col gap-4'>
          <div  className='grid gap-2 w-full'>
            <Label htmlFor='name'>Enter your full name</Label>
            <Input className='border border-slate-400 rounded h-10 p-1' required name='name' type='text' id='name' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='name'>Enter your email</Label>
            <Input className='border border-slate-400 rounded h-10 p-1' required name='email' type='email' id='email' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='number'>Enter your phone number</Label>
            <Input 
              className='border border-slate-400 rounded h-10 p-1' required name='number' type='tel' id='email' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='date'>Pick date of visit</Label>
            <Input className='border border-slate-400 rounded h-10 p-1' required name='date' type='date' id='date' />
        </div>
        <div  className='grid gap-2 w-full'>
            <Label htmlFor='site'>Site to visit</Label>
            <Input className='border border-slate-400 rounded h-10 p-1' required name='site' type='site' id='site' />
        </div>  
        </div>
        <Button className='bg-secondary text-white p-2 rounded'>Book Viewing</Button>
    </form>
  )
}

export default BookForm