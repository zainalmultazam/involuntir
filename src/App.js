import { Route, Switch } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Landing from './pages/Landing'
import Login from './pages/Auth/Login'
import GalangDana from './pages/Donasi/Sekali/GalangDanaSekali'
import dashboardfundraiser from './pages/Fundraiser/DashboardFundraiser'
import LupaPassword from './pages/Auth/LupaPassword/LupaPassword'
import Daftar from './pages/Auth/Daftar/Daftar'
import CekEmail from './pages/Auth/LupaPassword/cekEmail'
import PasswordReset from './pages/Auth/LupaPassword/PasswordReset'
import LihatProfile from './pages/Profile/LihatProfile'
import ubahProfile from './pages/Profile/UbahProfile'
import pengaturan from './pages/Profile/Pengaturan/Pengaturan'
import pengingatDonasi from './pages/Profile/pengingatDonasi'
import Donasi from 'pages/Donasi/Donasi'
import Simpan from 'pages/Simpan'
import Notifikasi from 'pages/Notifikasi'
import VerifikasiEmail from './pages/Auth/Daftar/VerifikasiEmail'
import VerifikasiBerhasil from './pages/Auth/Daftar/verifikasiBerhasil'
import NotFound from './pages/NotFound'
import Riwayat from './pages/Riwayat/Riwayat'
import riwayatDetail from 'pages/Riwayat/RiwayatDetail'
import GoogleCallback from 'pages/GoogleCallback'
import TransaksiFundraiser from './pages/Fundraiser/TransaksiFundraiser'
import TransaksiFundraiserDetail from './pages/Fundraiser/TransaksiFundraiserDetail'
import DetailPembayaran from 'pages/Donasi/Sekali/DetailPembayaran'
import Biaya from 'pages/Donasi/Biaya'
import TentangKami from 'pages/Profile/TentangKami'
import JumlahDonasi from 'pages/Donasi/Sekali/JumlahDonasi'
import InstruksiPembayaran from 'pages/Donasi/Sekali/InstruksiPembayaran'
import DaftarGalangDana from 'pages/Donasi/BuatGalangDana/DaftarGalangDana'
import BuatGalangDana from 'pages/Donasi/BuatGalangDana/BuatGalangDana'
import StepBuatGalangDana from 'pages/Donasi/BuatGalangDana/StepBuatGalangDana'
import GalangDanaRutin from 'pages/Donasi/Rutin/GalangDanaRutin'
import JumlahDonasiRutin from 'pages/Donasi/Rutin/JumlahDonasiRutin'
import Rekening from 'pages/Profile/Pengaturan/Rekening'
import Laporkan from 'pages/Donasi/Laporkan'
import DetailDonasi from './pages/Donasi/Sekali/DetailDonasi'
import Bantuan from 'pages/Profile/Bantuan'
import Panduan from 'pages/Donasi/Panduan'
import DetailTopUp from 'pages/Profile/TopUp/DetailTopUp'
import UbahKataSandi from 'pages/Profile/Pengaturan/UbahKataSandi'
import useAnalyticsEventTracker from 'hooks/useAnalyticsEventTracker'
import Berhasil from 'components/Akun/Berhasil'
import AdaYangBaru from 'pages/Profile/AdaYangBaru'
import InstruksiPembayaranTopUp from 'pages/Profile/TopUp/InstruksiPembayaranTopUp'
import VerifikasiAkun from 'pages/Profile/Pengaturan/VerifikasiAkun'
import InstruksiPembayaranRiwayat from 'pages/Riwayat/InstruksiPembayaranRiwayat'
import GalangDanaSupporter from 'pages/Donasi/GalangDanaSupporter/GalangDanaSupporter'
import DonasiBalanceBerhasil from 'pages/Donasi/Sekali/DonasiBalanceBerhasil'
import DashboardTopUp from 'pages/Profile/TopUp/DashboardTopUp'
import PembayaranTopUp from 'pages/Profile/TopUp/PembayaranTopUp'
import Search from 'pages/Search'
import ProfileDonasi from 'pages/Donasi/Profile/Donasi'
import Aktivitas from 'pages/Aktivitas/Aktivitas'
import DetailAktivitas from 'pages/Aktivitas/DetailAktivitas'
import NewProfille from 'pages/Profile/NewProfille'
import NewPengaturan from 'pages/Profile/Pengaturan/NewPengaturan'

function App() {
  useAnalyticsEventTracker()
  return (
    <UserProvider>
      <Switch>
        {/* ROOT */}
        <Route exact path="/" component={Landing} />
        {/* LANDING */}
        <Route exact path="/simpan" component={Simpan} />
        <Route exact path="/notifikasi" component={Notifikasi} />
        <Route exact path="/search" component={Search} />
        {/* REGISTER */}
        <Route exact path="/register" component={Daftar} />
        <Route
          exact
          path="/register/verifikasi-email"
          component={VerifikasiEmail}
        />
        <Route
          exact
          path="/register/verifikasiBerhasil"
          component={VerifikasiBerhasil}
        />
        {/* LOGIN */}
        <Route exact path="/login" component={Login} />
        {/* LUPA PASSWORD */}
        <Route exact path="/password/lupa" component={LupaPassword} />
        <Route exact path="/password/cek-email" component={CekEmail} />
        <Route exact path="/password/reset" component={PasswordReset} />
        <Route exact path="/password/reset/berhasil" component={Berhasil} />
        {/* DONASI */}
        <Route exact path="/donasi/:slug" component={Donasi} />
        <Route exact path="/panduan" component={Panduan} />
        <Route exact path="/biaya" component={Biaya} />
        {/* profile involunter */}
        <Route exact path="/newprofile" component={NewProfille} />
        <Route exact path="/donasi" component={ProfileDonasi} />
        <Route exact path="/newpengaturan" component={NewPengaturan} />
        {/* Aktivitas involunter */}
        <Route exact path="/aktivitas" component={Aktivitas} />
        <Route exact path="/aktivitas/detail" component={DetailAktivitas} />
        {/* SUPPORTER */}
        <Route exact path="/supporter" component={GalangDanaSupporter} />
        {/* BUAT GALANG DANA */}
        <Route exact path="/galangdana" component={DaftarGalangDana} />
        <Route exact path="/galangdana/create" component={BuatGalangDana} />
        <Route
          exact
          path="/galangdana/create/step"
          component={StepBuatGalangDana}
        />
        {/* DONASI SEKALI */}
        <Route exact path="/donasi-sekali/:slug" component={GalangDana} />
        <Route
          exact
          path="/donasi-sekali/:slug/jumlah-donasi"
          component={JumlahDonasi}
        />
        <Route
          exact
          path="/donasi-sekali/:slug/jumlah-donasi/pembayaran"
          component={DetailPembayaran}
        />
        <Route
          exact
          path="/donasi-sekali/:slug/jumlah-donasi/berhasil"
          component={DonasiBalanceBerhasil}
        />
        <Route
          exact
          path="/donasi-sekali/:slug/jumlah-donasi/pembayaran/:idn"
          component={InstruksiPembayaran}
        />
        <Route
          exact
          path="/donasi-sekali/:slug/jumlah-donasi/pembayaran/status/:id"
          component={DetailDonasi}
        />
        <Route
          exact
          path="/donasi-sekali/:slug/laporkan"
          component={Laporkan}
        />
        {/* DONASI RUTIN */}
        <Route exact path="/donasi-rutin/:slug" component={GalangDanaRutin} />
        <Route
          exact
          path="/donasi-rutin/:slug/jumlah-donasi"
          component={JumlahDonasiRutin}
        />
        {/* DASHBOARD FUNDRAISER */}
        <Route exact path="/dashboard" component={dashboardfundraiser} />
        <Route
          exact
          path="/dashboard/transaksi"
          component={TransaksiFundraiser}
        />
        <Route
          exact
          path="/dashboard/transaksi/detail/:slug"
          component={TransaksiFundraiserDetail}
        />

        {/* PROFILE/AKUN */}
        <Route exact path="/profile/:id" component={LihatProfile} />
        <Route exact path="/bantuan" component={Bantuan} />
        <Route exact path="/dashboard-topup" component={DashboardTopUp} />
        <Route exact path="/tentang-kami" component={TentangKami} />
        <Route exact path="/terbaru" component={AdaYangBaru} />
        <Route exact path="/ubah-profile" component={ubahProfile} />
        <Route exact path="/ubah-profile/berhasil" component={Berhasil} />
        <Route exact path="/pengaturan" component={pengaturan} />
        <Route exact path="/pengaturan/rekening" component={Rekening} />
        <Route
          exact
          path="/pengaturan/rekening/berhasil"
          component={Berhasil}
        />
        <Route
          exact
          path="/pengaturan/verifikasi-akun"
          component={VerifikasiAkun}
        />
        <Route
          exact
          path="/pengaturan/verifikasi-akun/berhasil"
          component={Berhasil}
        />
        <Route
          exact
          path="/pengaturan/ubah-kata-sandi"
          component={UbahKataSandi}
        />
        <Route
          exact
          path="/pengaturan/ubah-kata-sandi/berhasil"
          component={Berhasil}
        />
        {/* PROFILE/TOPUP */}
        <Route exact path="/profile/:id/top-up" component={DashboardTopUp} />
        <Route
          exact
          path="/profile/:id/top-up/pembayaran"
          component={PembayaranTopUp}
        />
        <Route
          exact
          path="/profile/:id/top-up/pembayaran/status/:idn"
          component={DetailTopUp}
        />
        <Route
          exact
          path="/profile/:id/top-up/pembayaran/instruksi"
          component={InstruksiPembayaranTopUp}
        />
        {/* RIWAYAT */}
        <Route exact path="/riwayat" component={Riwayat} />
        <Route
          exact
          path="/riwayat/:idn"
          component={InstruksiPembayaranRiwayat}
        />
        <Route exact path="/riwayat/detail/:slug" component={riwayatDetail} />

        {/* 404 */}

        <Route exact path="/pengingatDonasi" component={pengingatDonasi} />

        <Route exact path="/auth/google" component={GoogleCallback} />

        <Route path="*" component={NotFound} exact />
      </Switch>
    </UserProvider>
  )
}

export default App
