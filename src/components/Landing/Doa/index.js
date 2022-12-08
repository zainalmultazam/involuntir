export const Doa = () => {
  return (
    <div className='p-main'>
      <p style={{ fontSize: '18px', marginBottom: '24px' }} className='p-main'>
        Doa dan Kabar Baik Hari Ini
      </p>
      <div
        className='rounded-md shadow-md'
        style={{
          paddingTop: '27px',
          paddingLeft: '32px',
          paddingRight: '22px',
          paddingBottom: '23px',
          marginBottom: '32px',
        }}>
        <div className='flex justify-between p-main mx-0'>
          <div
            className='flex flex-row content-center'
            style={{ marginBottom: '6px' }}>
            <img
              src='https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg'
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'cover',
              }}
              className='rounded-full'
              alt=''
            />
            <p
              style={{
                fontSize: '16px',
                marginLeft: '13px',
                fontWeight: 'bold',
              }}>
              Sischa Chohl
            </p>
            <div></div>
          </div>
        </div>
        <p
          style={{
            fontSize: '16px',
            marginRight: '8px',
            marginBottom: '29px',
          }}></p>
        <div className='flex flex-row'>
          <div className='flex flex-row' style={{ marginRight: '26px' }}>
            <img
              style={{
                marginRight: '6px',
                width: '15px',
              }}
              src='/icon/landing-page/heart-active.svg'
              alt=''
            />
            <p style={{ fontSize: '12px' }}>Suka</p>
          </div>
          <div className='flex flex-row' style={{ marginRight: '26px' }}>
            <img
              style={{
                marginRight: '6px',
                width: '15px',
              }}
              src='/icon/landing-page/share.svg'
              alt=''
            />
            <p style={{ fontSize: '10px' }}>Bagikan</p>
          </div>
        </div>
      </div>
      <button
        style={{
          padding: '10px 0px',
          width: '100%',
          height: '41px',
          backgroundColor: '#E7513B',
          color: 'white',
          marginBottom: '95px',
        }}
        className='rounded-xl'>
        Lihat Kabar Lainnya
      </button>
    </div>
  );
};
