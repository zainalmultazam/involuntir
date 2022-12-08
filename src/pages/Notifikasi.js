/* eslint-disbale */
import Arrow2 from 'components/arrow2'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Notifikasi() {
  const [tabIndex, setTabIndex] = useState(0)
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)

  const arrow_style = {
    position: 'fixed',
    zIndex: '99',
  }
  const typograph_subtitle = {
    'font-weight': '400',
    'line-height': '21.79px',
    'font-size': '16px',
  }
  const typograph_content = {
    'font-size': '14px',
    'line-height': '19.07px',
    'font-weight': '400',
    'margin-top': '6px',
    color: '#717171',
  }
  const passive_background = {
    'background-color': 'rgba(254, 174, 0, 0.1)',
    'border-bottom': '1px solid #CACACA',
  }
  const active_background = {
    'background-color': 'rgba(255, 255, 255, 0.1)',
    'border-bottom': '1px solid #CACACA',
  }
  const typograph_tabs_styling = {
    position: 'fixed',
    top: '0',
    fontSize: '16px',
    fontWeight: '600',
    fontStyle: 'normal',
    maxWidth: '430px',
    width: '100%',
    maxHeight: '72px',
    height: '100%',
    margin: 'auto',
    background: '#FFF',
    boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
  }
  const border_bottom_active = {
    borderBottom: '2px solid #E7513B',
    height: '100%',
    paddingTop: '24px',
    paddingBottom: '24px',
  }
  const border_bottom_passive = {
    borderBottom: 'none',
    height: '100%',
    paddingTop: '24px',
    paddingBottom: '24px',
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container top-y-10  mx-auto max-w-[430px] h-screen  bg-white">
        {/* Tabs */}
        <div style={arrow_style}>
          <Link to={'/'}>
            <Arrow2></Arrow2>
          </Link>
        </div>
        <div
          className="text-center flex items-center justify-center"
          style={typograph_tabs_styling}
        >
          <ul className={'flex justify-between items-center w-[100%]'}>
            <li className={'w-[100%]'}>
              <button
                onClick={() => setTabIndex(0)}
                className={
                  'w-[100%] outline-none inline-block rounded-t-lg border-b-2 border-transparent hover:text-gray-600'
                }
                style={
                  tabIndex === 0 ? border_bottom_active : border_bottom_passive
                }
              >
                Informasi
              </button>
            </li>

            <li className={'w-[100%]'}>
              <button
                onClick={() => setTabIndex(1)}
                className={
                  'w-[100%] outline-none inline-block rounded-t-lg border-b-2 border-transparent hover:text-gray-600'
                }
                style={
                  tabIndex === 1 ? border_bottom_active : border_bottom_passive
                }
              >
                Notifikasi
              </button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className={'flex'} style={{ marginTop: '72px' }}>
          <div
            className={`font-semibold ${
              tabIndex === 0 ? '' : 'hidden'
            }  px-[24px] pt-4 pb-4`}
            style={hover ? active_background : passive_background}
            onClick={() => setHover(true)}
          >
            <p className="font" style={typograph_subtitle}>
              Donasi tersalurkan
            </p>
            <p style={typograph_content}>
              Donasimu telah diterima oleh penggalang dana, kamu bisa menuliskan
              doa dengan baik
            </p>
          </div>
        </div>

        <div className={'flex'}>
          <div
            className={`font-semibold ${
              tabIndex === 0 ? '' : 'hidden'
            } px-[24px] pt-4 pb-4`}
            style={hover2 ? active_background : passive_background}
            onClick={() => setHover2(true)}
          >
            <p className="font" style={typograph_subtitle}>
              Donasi berhasil
            </p>
            <p style={typograph_content}>
              Donasi berhasil dan telah masuk dalam sistem, bantu share galang
              dana supaya semakin banyak
            </p>
          </div>
        </div>

        <div className={'flex items-center justify-center'}>
          <div
            className={`font-semibold ${
              tabIndex === 1 ? '' : 'hidden'
            } px-[24px] pt-4 pb-4 text-center flex items-center justify-center`}
          >
            <p style={typograph_content} className="text-center">
              Tidak ada notifikasi untukmu
            </p>
          </div>
        </div>

        <div className={'flex items-center justify-center'}>
          <div
            className={
              `font-semibold ${tabIndex === 1 ? '' : 'hidden'}` +
              ' px-[24px] pt-4 pb-4 text-center flex items-center justify-center'
            }
          >
            <p style={typograph_content} className="text-center">
              Tidak ada notifikasi untukmu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifikasi
