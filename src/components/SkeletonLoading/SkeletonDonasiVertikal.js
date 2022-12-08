import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonDonasiVertikal() {
  const result_style = {
    marginTop: '24px',
    zIndex: '9999',
    marginLeft: '-2px',
    maxWidth: '211px',
    width: '100%',
  };

  const square_skeleton = {
    height: '121px',
    borderRadius: '15px',
  };

  const skeleton_progress = {
    height: '3px',
    marginTop: '10px',
    marginBottom: '0px',
    paddingBottom: '0px',
  };

  const skeleton_title = {
    height: '24px',
  };

  const skeleton_sub = {
    height: '11.5px',
    marginTop: '-8px',
  };

  const skeleton_sub_div = {
    marginTop: '-8px',
  };

  return (
    <div style={result_style} className='grid grid-cols-2'>
      <div className='col-span-2'>
        <Skeleton style={square_skeleton} />
      </div>
      <div className='col-span-2 mt-4'>
        <div className='mt-1 mb-0'>
          <Skeleton count={2} style={skeleton_title} />
          <Skeleton style={skeleton_progress} />
          <div className='grid grid-cols-2' style={skeleton_sub_div}>
            <div className='mr-2 mt-0'>
              <Skeleton count={2} style={skeleton_sub} />
            </div>
            <div className='mr-2 mt-0'>
              <Skeleton count={2} style={skeleton_sub} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonDonasiVertikal;
