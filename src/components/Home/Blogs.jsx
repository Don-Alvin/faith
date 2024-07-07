import { PulseLoader } from "react-spinners";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlogs";

const Blogs = () => {

  const {isLoading, isError, error, blogs} = useBlogs()

  let content;
  let limit = 4;

  if(isLoading) content = <PulseLoader color='#BB7F10' />

  if(blogs) {
    content = (
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {blogs.slice(0,limit)?.map(blog => (
          <Link key={blog.id} to={`blogs/${blog.title}`}>
            <Card className='rounded w-full border flex flex-col gap-2 items-center p-2' >
              <CardHeader className='w-full flex justify-center' >
                <img
                  className="w-full h-[100px] md:h-[100px] object-cover rounded"
                  src={blog.imageUrl} 
                  alt={blog.title} 
                />
              </CardHeader>
              <CardContent className='flex justify-between w-full items-center'>
                <div className="text-sm">
                  <p className="text-sm font-semibold">{blog.title}</p>
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
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-4xl text-xl text-primary">Our <span className="text-secondary">Blogs</span> </h2>
        <Link to='listings' className="font-semibold text-sm">View more blogs</Link>
      </div>
      <div>
        {content}
      </div>
      <div className="w-full flex justify-center">
        <Link to='/blogs'>
          <Button className='rounded bg-secondary text-white p-3'>View more blogs</Button>
        </Link>
      </div>
    </section>
  )
}

export default Blogs