import Button from '../GalangDana/MenuEditGalangDana.js/index.js';
import PedulyLogo from '../../assets/icons/PedulyLogo';
import DatabaseIcon from '../../assets/icons/DatabaseIcon';
import MailIcon from '../../assets/icons/MailIcon';
import DollarIcon from '../../assets/icons/DollarIcon';
import UsersIcon from '../../assets/icons/UsersIcon';
import HelpIcon from '../../assets/icons/HelpIcon';

const menu = [
  {text: 'Fundraiser', link: '#', icon: DatabaseIcon},
  {text: 'Kontak Masuk', link: '#', icon: MailIcon},
  {text: 'Galang Dana', link: '#', icon: DollarIcon},
  {text: 'Kegiatan', link: '#', icon: UsersIcon},
];

const Sidebar = () => {
  return (
    <div className='fixed w-[245px] flex flex-col justify-between items-center p-4 bg-white h-screen shadow'>
      <div className='text-center'>
        <div className='flex justify-center border-b border-gray-200 pb-3'>
          {PedulyLogo}
        </div>

        <div className='mt-4'>
          {menu.map((m) => (
            <Button
              className='min-w-[180px] mt-4 border border-gray-200 hover:border-transparent hover:text-white
              hover:bg-peduly-primary'
              textClass='ml-2'
              icon={m.icon}
            >
              {m.text}
            </Button>
          ))}
        </div>
      </div>

      <div className='pt-3 border-t border-gray-200'>
        <Button
          className='min-w-[180px] border border-gray-200 hover:border-transparent hover:text-white
          hover:bg-peduly-primary'
          textClass='ml-2'
          icon={HelpIcon}
        >
          Bantuan
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
