import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonRiwayat() {
  return (
    <div>
      <div className='mx-[20px] mt-[10px]'>
        <Skeleton count={1} style={{height: '60px', width: '100%'}} />
        <div className='grid grid-cols-10 mt-[10px] w-full'>
          <span className='col-span-5'>
            <Skeleton count={1} style={{height: '140px', width: '90%'}} />
          </span>
          <span className='col-span-5'>
            <Skeleton count={1} style={{height: '140px', width: '100%'}} />
          </span>
        </div>
      </div>

      <Skeleton style={{height: '3px', width: '100%', marginTop: '30px'}} />

      <div className='mx-[20px]'>
        <div className='grid grid-cols-12  h-[61px] items-center '>
          <p className='col-span-5'>
            <Skeleton count={1} style={{height: '30px', width: '90%'}} />
          </p>
          <p className='col-span-7'>
            <Skeleton count={1} style={{height: '30px', width: '100%'}} />
          </p>
        </div>

        <div className='grid grid-cols-12  h-[61px] items-center '>
          <p className='col-span-5'>
            <Skeleton count={1} style={{height: '30px', width: '90%'}} />
          </p>
          <p className='col-span-7'>
            <Skeleton count={1} style={{height: '30px', width: '100%'}} />
          </p>
        </div>

        <div className='grid grid-cols-12  h-[61px] items-center '>
          <p className='col-span-5'>
            <Skeleton count={1} style={{height: '30px', width: '90%'}} />
          </p>
          <p className='col-span-7'>
            <Skeleton count={1} style={{height: '30px', width: '100%'}} />
          </p>
        </div>

        <div className='grid grid-cols-12  h-[61px] items-center '>
          <p className='col-span-5'>
            <Skeleton count={1} style={{height: '30px', width: '90%'}} />
          </p>
          <p className='col-span-7'>
            <Skeleton count={1} style={{height: '30px', width: '100%'}} />
          </p>
        </div>

        <div className='grid grid-cols-12  h-[61px] items-center '>
          <p className='col-span-5'>
            <Skeleton count={1} style={{height: '30px', width: '90%'}} />
          </p>
          <p className='col-span-7'>
            <Skeleton count={1} style={{height: '30px', width: '100%'}} />
          </p>
        </div>
      </div>

      <Skeleton style={{height: '3px', width: '100%', marginTop: '30px'}} />

      <div className='mx-[20px]'>
        <Skeleton
          count={1}
          style={{height: '60px', width: '100%', borderRadius: '999px'}}
        />
      </div>
    </div>
  );
}

export default SkeletonRiwayat;
