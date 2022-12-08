import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonTransaksi() {
  return (
    <div className='grid grid-cols-12 py-[24px]'>
      <span className='col-span-5'>
        <p className='text-sm font-medium'>
          <Skeleton count={1} style={{height: '19px', width: '90%'}} />
        </p>
        <p className='text-sm text-[#717171] font-normal'>
          <Skeleton count={1} style={{height: '19px', width: '90%'}} />
        </p>
      </span>
      <span className='col-span-3'>
        <p className='text-sm font-medium'>
          <Skeleton count={1} style={{height: '19px', width: '80%'}} />
        </p>
        <p className='text-sm text-[#717171] font-normal'>
          <Skeleton count={1} style={{height: '19px', width: '80%'}} />
        </p>
      </span>
      <span className='col-span-4'>
        <Skeleton count={1} style={{height: '38px', width: '100%'}} />
      </span>
    </div>
  );
}

export default SkeletonTransaksi;
