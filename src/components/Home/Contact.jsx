import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const Contact = () => {
  return (
    <section id="contactus" className="p-6 md:p-20">
      <div className="flex flex-col items-center gap-4 mmd:mb-6 lg:mb-10">
        <h3 className="font-semibold text-2xl">Looking to sell or buy?</h3>
        <p className="text-xl font-medium text-center">Tell us more about your dreams or project and we will get back to you </p>
      </div>
      <form className="grid md:px-10 gap-3" method="POST" action="https://formsubmit.co/anadoomollo@zohomail.com">
        <div className="grid gap-2">
          <Label htmlFor='name'>Name</Label>
          <Input className='rounded p-3 border border-slate-400' id='name' type='text' name='name' required />
        </div>
        <div  className='grid gap-2 '>
            <Label htmlFor='number'>Enter your phone number</Label>
            <Input 
              className='border border-slate-400 rounded p-3 ' required name='number' type='tel' id='number' />
        </div>
        <div className="grid gap-2">
          <Label htmlFor='email'>Email</Label>
          <Input className='rounded p-3 border border-slate-400' id='email' type='email' required name='email' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='message'>Enter your message</Label>
          <Textarea className='p-3 rounded border border-slate-400' placeholder='Enter your message here..' name='message' id='message' rows='10' required />
        </div>
        
        <Button className='text-white bg-secondary w-fit rounded p-2 mt-4'>Send message</Button>
      </form>
    </section>
  )
}

export default Contact

