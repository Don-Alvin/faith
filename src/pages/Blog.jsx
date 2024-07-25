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
      <article className='grid gap-2 mb-5'>
        <h4 className='font-semibold'>{blog.title}</h4>
        <Separator />
        <img
          src={blog.imageUrl} 
          alt={blog.title}
          className='w-full h-[200px] md:h-[400px] object-cover' 
        />
        <Separator />
        <p>{blog.content}</p>
      </article>
    )
  }

  return (
    <div className='relative top-20 p-6 mb-10'>
      <MetaData title={blog.title} />
      {content}
    </div>
  )
}

export default Blog