import { useState } from 'react';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className='flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative shadow-md'>
      <a href='#' className='block'>
        <h1 className='font-bold text-lg'>Logo</h1>
      </a>
      <button
        onClick={toggleLink}
        className='inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1'
      >
        <svg
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          showLink ? '' : 'hidden'
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
        <a
          href='#'
          className='block py-1 px-2 text-indigo-600 hover:bg-gray-100'
        >
          Home
        </a>
        <a href='#' className='block py-1 px-2 text-gray-600 hover:bg-gray-100'>
          About us
        </a>
        <a href='#' className='block py-1 px-2 text-gray-600 hover:bg-gray-100'>
          Services
        </a>
        <a href='#' className='block py-1 px-2 text-gray-600 hover:bg-gray-100'>
          Blog
        </a>
        <a href='#' className='block py-1 px-2 text-gray-600 hover:bg-gray-100'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
