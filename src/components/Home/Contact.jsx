import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const Contact = () => {
  return (
    <section className="p-6 bg-slate-100">
      <div>
        <h3 className="font-semibold text-2xl">Looking to sell or buy?</h3>
        <p className="text-xl text-center">Tell us more about your dreams or project and we will get back to you </p>
      </div>
      <form className="grid gap-3" method="POST" action="https://formsubmit.co/anadoomollo@zohomail.com">
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
        
        <Button className='text-white bg-secondary w-fit rounded p-2'>Send message</Button>
      </form>
    </section>
  )
}

export default Contact

