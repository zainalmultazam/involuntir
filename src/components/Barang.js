import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import instance from 'axios';

import ProgressBar from '../components/ProgressBar';

import IdrFormat from 'utils/IdrFormat';
import { API_URL } from 'config/api';

export const Barang = () => {
  const [itemKategori, setItemKategori] = useState([]);

  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    const gettinData = await instance.get('/api/galangdana');
    const response = await gettinData.data;
    const itemnya = await response.kategori.pantiAsuhan;

    setItemKategori(itemnya);
  };

  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay);

    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000;
      const secondDate = new Date();

      const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
      return diffDays;
    }

    return 'Tanpa batas';
  }

  return (
    
    <>
      <div style={{marginTop: '10px'}} className='mx-[20px]'>
        {itemKategori.map((value) => (
          <div key={value.id}>
            <Link
              to={{
                pathname: `/galangdana/${value.judul_slug}`,
              }}
            >
              <div
                style={{marginBottom: '17px', marginTop: '13px'}}
                className='grid grid-cols-12'
              >
                <div className='col-span-5 '>
                  <img
                    src={`${API_URL}/images/images_campaign/${value.foto_campaign}`}
                    alt=''
                    style={{
                      height: '121px',
                      width: '4/6',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/no-picture.png';
                    }}
                  />
                </div>

                <div
                  className='col-span-6'
                  style={{marginLeft: '20px', width: '100%'}}
                >
                  <p
                    style={{fontSize: '16px'}}
                    className='overflow-ellipsis  overflow-hidden max-h-[52px] text-left leading-[25.6px] font-normal'
                  >
                    {value.judul_campaign}
                  </p>
                  <div className='rounded-full progress mt-[10px]'>
                    <ProgressBar
                      current={value.currentDonasi}
                      target={value ? value.nominal_campaign : 0}
                    />
                  </div>
                  <div
                    className='flex justify-between'
                    style={{marginTop: '11px'}}
                  >
                    <div className='text-left leading-4 font-semibold'>
                      <p style={{fontSize: '11px'}}>Terkumpul</p>
                      <p
                        style={{
                          fontSize: '12px',
                        }}
                      >
                        Rp {IdrFormat(value.nominal_campaign)}
                      </p>
                    </div>
                    <div className='text-right leading-4 font-semibold'>
                      <p style={{fontSize: '11px'}}>Sisa Hari</p>
                      <p
                        style={{
                          fontSize: '12px',
                        }}
                      >
                        {dayToGo(value.batas_waktu_campaign)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>

  );
};