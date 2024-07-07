import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import BookForm from '../components/Forms/BookForm';

const BookModal = ({handleBookMenu, site}) => {

  return createPortal (
    <div>
        <div 
            className=' bg-black opacity-80 blur-2xl fixed inset-0 z-40'
            onClick={handleBookMenu}
        >
        </div>
        {/* small screen menu */}
        <div className=' bg-white w-[90%] top-10 bottom-20 left-4 md:left-10 fixed z-40 h-screen px-6 py-4 flex flex-col gap-6 text-xl rounded'>
            <div className='bg-secondary w-fit p-2 text-white rounded-full text-xl h-fit self-end flex justify-center' onClick={handleBookMenu}>
                <X className='bg-black text-white rounded-full shadow-lg' />
            </div>
            <BookForm site={site} />
        </div>
    </div>,
    document.getElementById('portal')
  )
}

export default BookModal