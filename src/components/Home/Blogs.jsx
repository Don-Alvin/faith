import { PulseLoader } from "react-spinners";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlogs";

const Blogs = () => {

  const {isLoading, isError, error, blogs} = useBlogs()

  let content;
  let limit = 6;

  if(isLoading) content = <PulseLoader color='#BB7F10' />

  if(blogs) {
    content = (
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.slice(0,limit)?.map(blog => (
          <Link key={blog.id} to={`/blogs/${blog.title}`}>
            <Card className='shadow-xl rounded w-full border flex flex-col gap-2 items-center p-2' >
              <CardHeader className='w-full flex justify-center' >
                <img
                  className="w-full h-[150px] md:h-[200px] object-cover rounded"
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  title={listing?.name}
                />
              </CardHeader>
              <CardContent className='flex justify-between w-full items-center'>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p>{blog.intro}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-slate-50 p-4 flex flex-col gap-6 md:px-20 md:py-10">
      <div className="flex flex-col gap-2 items-center md:mb-4">
        <h2 className="font-semibold text-xl md:text-4xl text-primary">Our <span className="text-secondary">Blogs</span> </h2>
        <p className="text-xl text-center font-medium">Read our expert opinion on the real estate field.</p>
      </div>
      <div className="my-4">
        {content}
      </div>
      <div className="w-full flex justify-center">
        <Link to='/blogs'>
          <Button className='rounded bg-secondary text-white text-lg p-4'>View more blogs</Button>
        </Link>
      </div>
    </section>
  )
}

export default Blogs