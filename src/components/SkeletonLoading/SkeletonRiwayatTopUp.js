import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonRiwayatTopUp() {
  return (
    <div>
      <div
        className="mx-[20px] mt-[102px]"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <Skeleton
            count={1}
            style={{ height: '80px', width: '80px', borderRadius: '50%' }}
          />
          <Skeleton
            count={1}
            style={{ height: '15px', width: '80px', marginTop: '24px' }}
          />
          <Skeleton count={1} style={{ height: '15px', width: '80px' }} />
        </div>
      </div>

      <Skeleton style={{ height: '2px', width: '100%', marginTop: '30px' }} />

      <div className="mx-[20px]">
        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>
      </div>

      <Skeleton style={{ height: '2px', width: '100%', marginTop: '30px' }} />

      <div className="mx-[20px]">
        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>

        <div className="grid grid-cols-12  h-[31px] items-center ">
          <p className="col-span-5">
            <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
          </p>
          <p className="col-span-7">
            <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
          </p>
        </div>
      </div>

      <Skeleton style={{ height: '2px', width: '100%', marginTop: '30px' }} />

      <div className="grid grid-cols-12  h-[31px] items-center mx-[20px]">
        <p className="col-span-5">
          <Skeleton count={1} style={{ height: '20px', width: '90%' }} />
        </p>
        <p className="col-span-7">
          <Skeleton count={1} style={{ height: '20px', width: '100%' }} />
        </p>
      </div>
    </div>
  )
}

export default SkeletonRiwayatTopUp
