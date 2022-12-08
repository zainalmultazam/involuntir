import React, {useState} from 'react';

const DropdownMenu = () => {
  const [showOption, setShowOption] = useState(false);

  const handleClick = () => {
    setShowOption(!showOption);
  };

  return (
    <div class='relative inline-block'>
      <div>
        <button
          onClick={handleClick}
          type='button'
          class='inline-flex justify-center w-full rounded-md px-4  bg-white text-sm font-medium text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-peduly-primary'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
        >
          Setiap
          <svg
            class='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {showOption && (
        <div
          class='origin-top-right absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabindex='-1'
        >
          <div class='py-1' role='none'>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-0'
            >
              Senin
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-1'
            >
              Selasa
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-2'
            >
              Rabu
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-2'
            >
              Kamis
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-2'
            >
              Jumat
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-2'
            >
              Sabtu
            </a>
            <a
              href='/#'
              class='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabindex='-1'
              id='menu-item-2'
            >
              Minggu
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
