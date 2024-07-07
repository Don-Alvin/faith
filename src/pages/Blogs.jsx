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
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {blogs?.map(blog => (
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
    <section className='p-6 mt-10'>
      <MetaData title={'All Blogs'} />
      <header className='my-2 flex font-semibold justify-between items-center'>
        <h2 className='text-gray-700 font-semibold text-xl'>Blogs</h2>
      </header>
      <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
        {content}
      </article>
    </section>
  )
}

export default Blogs