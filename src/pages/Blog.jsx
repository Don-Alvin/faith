import MetaData from '../components/Meta/meta'
import { Separator } from '../components/ui/separator'
import { useBlogs } from '../hooks/useBlogs'
import { useParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

const Blog = () => {

  const { title } = useParams()

  const {blogs, error, isLoading, isError } = useBlogs()

  let content;

  if(isLoading) {
    content = <PulseLoader color='#BB7F10' />
  }else if(isError) {
    content = <p>Oooop! We encountered an error: {error}</p>
  }

  const blog = blogs?.find(blog => blog.title === title);


  if(blog) {
    content = (
      <article className='grid gap-2 mb-20'>
        <h1 className='font-semibold text-2xl text-center'>{blog.title}</h1>
        <Separator />
        <img
          src={blog.imageUrl} 
          alt={blog.title}
          title={blog?.title}
          className='w-full h-[200px] md:h-[400px] object-cover' 
        />
        <Separator />
        <p className='text-lg'>{blog.content}</p>
      </article>
    )
  }

  return (
    <div className='relative top-24 p-6 md:px-20 '>
      <MetaData title={blog.title} name='description' content={blog.title} />
      {content}
    </div>
  )
}

export default Blog