import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import Fade from 'react-reveal/Fade';
import Cookies from 'js-cookie';
import axios from 'axios';
import {API_URL} from '../../config/api';

function Alert({title, desc, type, action}) {
  const history = useHistory();
  const [token, setToken] = useState('');

  useEffect(() => {
    let tempToken = Cookies.get('token');
    setToken(tempToken);
  }, []);

  const handleLogout = (inputUrl, inputToken) => {
    try {
      axios
        .post(inputUrl, {
          headers: {
            Authorization: `Bearer ${inputToken}`,
          },
        })
        .then((res) => res)
        .catch((err) => err);
    } catch (err) {}
  };

  return (
    <div className='relative  text-center w-[374px] h-[200px]'>
      <Fade top>
        <div className='absolute translate-x-[-50%] translate-y-[-50%]  w-[300px] bottom-[300px] px-3 py-3  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-base'>
          <span className='text-lg text-center font-medium leading-6 text-gray-900'>
            {title}
          </span>

          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{desc}</p>
          </div>

          <div className='mt-4 w-full  grid grid-col-2'>
            {type === 'confirm' ? (
              <>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-peduly-primary bg-white  border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 '
                  onClick={() => {
                    action(false);
                  }}
                >
                  Tidak
                </button>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-peduly-primary  border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 '
                  onClick={() => {
                    handleLogout(`${API_URL}/api/auth/logout`, token);
                    Cookies.remove('token');
                    Cookies.remove('expireAt');
                    window.localStorage.clear();
                    history.push('/');
                  }}
                >
                  Ya
                </button>
              </>
            ) : (
              <button
                type='button'
                className='inline-flex justify-center px-4 py-2 text-sm font-medium text-peduly-primary bg-white  border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 '
              >
                OK
              </button>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Alert;
