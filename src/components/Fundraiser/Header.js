import Button from '../GalangDana/MenuEditGalangDana.js/index.js';
import UserIcon from '../../assets/icons/UserIcon';
import BellIcon from '../../assets/icons/BellIcon';
import {InputWithIcon as SearchBar, SelectInput} from '../Input';
import SearchIcon from '../../assets/icons/SearchIcon';
import DownloadIcon from '../../assets/icons/DownloadIcon';

const Header = () => {
  return (
    <div className='flex-col justify-end items-center mb-5 text-right'>
      <div className='flex justify-between'>
        <Button
          className='shadow-sm bg-white'
          textClass='ml-2'
          icon={DownloadIcon}
        >
          Ringkasan
        </Button>

        <div className='flex items-center'>
          <Button icon={BellIcon} />

          <div>{UserIcon}</div>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <SearchBar icon={SearchIcon} placeholder='Cari' />

        <SelectInput
          className='font-normal border border-gray-200'
          placeholder='Terbaru'
        />
      </div>
    </div>
  );
};

export default Header;
