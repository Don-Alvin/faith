import { PulseLoader } from "react-spinners";
import { useBlogs } from "../hooks/useBlogs";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import MetaData from "../components/Meta/meta";

const Blogs = () => {

  const {isLoading, isError, error, blogs} = useBlogs()

  let content;

  if(isLoading) content = <PulseLoader color='#BB7F10' />
  if(isError) content = <p>Oooop! We encountered an error: {error}</p>

  if(blogs) {
    content = (
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map(blog => (
          <Link key={blog.id} to={`/blogs/${blog.title}`}>
            <Card className='shadow-xl rounded w-full border flex flex-col gap-2 items-center p-2' >
              <CardHeader className='w-full flex justify-center' >
                <img
                  className="w-full h-[150px] md:h-[200px] object-cover rounded"
                  src={blog.imageUrl} 
                  alt={blog.title} 
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
    <section className='p-6 md:px-20 mt-10 md:mt-24'>
      <MetaData title={'All Blogs'} />
      <header className='my-2 flex font-semibold justify-center items-center'>
        <h1 className="font-semibold text-xl md:text-4xl text-primary">Our <span className="text-secondary">Blogs</span> </h1>
      </header>
      <article className='md:mt-8'>
        {content}
      </article>
    </section>
  )
}

export default Blogs