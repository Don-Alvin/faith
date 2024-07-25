import MetaData from '../components/Meta/meta'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col item-center w-full h-screen justify-center'>
      <MetaData title={'Page not found'} />
      <div className='flex flex-col items-center text-3xl'>
        <p>Ooops, we could not find the page you are looking for!</p>
        <p>Click <Link to='/' className='text-secondary font-bold'>here</Link> to return to homepage.</p>
      </div>
        
        
    </div>
  )
}

export default ErrorPage