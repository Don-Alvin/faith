import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuModal = ({handleAuthMenu, navLinks}) => {

  return createPortal (
    <div>
        <div 
            className=' bg-black opacity-80 blur-2xl fixed inset-0 z-40'
            onClick={handleAuthMenu}
        >
        </div>
        {/* small screen menu */}
        <div className=' bg-primary w-[70%] fixed top-0 right-0 z-40 h-screen px-6 py-4 flex flex-col gap-6 text-xl'>
            <div className='bg-secondary w-fit p-2 text-white rounded-full text-xl h-fit self-end flex justify-center' onClick={handleAuthMenu}>
                <X className='bg-secondary text-white rounded-full shadow-lg' />
            </div>
            <div className='text-[#111827] font-medium'>
                <ul className='flex flex-col gap-3'>
                  {navLinks.map(({title, to}) => (
                    <li className='text-white' onClick={handleAuthMenu}>
                        <Link to={to}>{title}</Link>
                    </li>
                  ))}  
                </ul>
            </div>
        </div>
    </div>,
    document.getElementById('portal')
  )
}

export default MenuModal