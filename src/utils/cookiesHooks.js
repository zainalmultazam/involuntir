import Cookies from 'js-cookie'

export const setToken = (token) => {
  Cookies.set('token', token, { sameSite: 'none', secure: true })
}

export const getToken = () => {
  return Cookies.get('token', { sameSite: 'none', secure: true })
}

export const removeToken = () => {
  return Cookies.remove('token', { sameSite: 'none', secure: true })
}

export const setSlug = (slug) => {
  Cookies.set('_slug', slug, { sameSite: 'none', secure: true })
}

export const getSlug = () => {
  return Cookies.get('_slug', { sameSite: 'none', secure: true })
}

export const removeSlug = () => {
  return Cookies.remove('_slug', { sameSite: 'none', secure: true })
}

export const setDataDonasi = (data) => {
  Cookies.set('_data', JSON.stringify(data), {
    sameSite: 'none',
    secure: true,
  })
}

export const getDataDonasi = () => {
  return Cookies.get('_data', { sameSite: 'none', secure: true })
}

export const removeDataDonasi = () => {
  return Cookies.remove('_data', { sameSite: 'none', secure: true })
}

export const setLupaKatSandiEmail = () => {
  Cookies.set('_email', 'sukses', { sameSite: 'none', secure: true })
}

export const getLupaKatSandiEmail = () => {
  return Cookies.get('_email', { sameSite: 'none', secure: true })
}

export const removeLupaKatSandiEmail = () => {
  return Cookies.remove('_email', { sameSite: 'none', secure: true })
}

export const setRegisterEmail = () => {
  Cookies.set('_emailRe', 'sukses', { sameSite: 'none', secure: true })
}

export const getRegisterEmail = () => {
  return Cookies.get('_emailRe', { sameSite: 'none', secure: true })
}

export const removeRegisterEmail = () => {
  return Cookies.remove('_emailRe', { sameSite: 'none', secure: true })
}

export const setPasswordReset = () => {
  Cookies.set('_passwordReset', 'sukses', { sameSite: 'none', secure: true })
}

export const getPasswordReset = () => {
  return Cookies.get('_passwordReset', { sameSite: 'none', secure: true })
}

export const removePasswordReset = () => {
  return Cookies.remove('_passwordReset', { sameSite: 'none', secure: true })
}

export const setReferal = (ref) => {
  Cookies.set('_ref', ref, { sameSite: 'none', secure: true })
}

export const getReferal = () => {
  return Cookies.get('_ref', { sameSite: 'none', secure: true })
}

export const removeReferal = () => {
  return Cookies.remove('_ref', { sameSite: 'none', secure: true })
}

export const setUbahKataSandiBerhasil = () => {
  Cookies.set('_ubahKataSandiBerhasil', 'sukses', {
    sameSite: 'none',
    secure: true,
  })
}

export const getUbahKataSandiBerhasil = () => {
  return Cookies.get('_ubahKataSandiBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const removeUbahKataSandiBerhasil = () => {
  return Cookies.remove('_ubahKataSandiBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const setVerifikasiAkunBerhasil = () => {
  Cookies.set('_verifikasiAkunBerhasil', 'sukses', {
    sameSite: 'none',
    secure: true,
  })
}

export const getVerifikasiAkunBerhasil = () => {
  return Cookies.get('_verifikasiAkunBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const removeVerifikasiAkunBerhasil = () => {
  return Cookies.remove('_verifikasiAkunBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const setUbahProfileBerhasil = () => {
  Cookies.set('_ubahProfileBerhasil', 'sukses', {
    sameSite: 'none',
    secure: true,
  })
}

export const getUbahProfileBerhasil = () => {
  return Cookies.get('_ubahProfileBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const removeUbahProfileBerhasil = () => {
  return Cookies.remove('_ubahProfileBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const setRekeningBerhasil = () => {
  Cookies.set('_rekeningBerhasil', 'sukses', {
    sameSite: 'none',
    secure: true,
  })
}

export const getRekeningBerhasil = () => {
  return Cookies.get('_rekeningBerhasil', { sameSite: 'none', secure: true })
}

export const removeRekeningBerhasil = () => {
  return Cookies.remove('_rekeningBerhasil', {
    sameSite: 'none',
    secure: true,
  })
}

export const setIdTransaksi = (id) => {
  Cookies.set('_idn', id, { sameSite: 'none', secure: true })
}

export const getIdTransaksi = () => {
  return Cookies.get('_idn', { sameSite: 'none', secure: true })
}

export const removeIdTransaksi = () => {
  return Cookies.remove('_idn', { sameSite: 'none', secure: true })
}

export const setDonasiBalanceBerhasil = () => {
  Cookies.set('_dbb', 'sukses', {
    sameSite: 'none',
    secure: true,
  })
}

export const getDonasiBalanceBerhasil = () => {
  return Cookies.get('_dbb', { sameSite: 'none', secure: true })
}

export const removeDonasiBalanceBerhasil = () => {
  return Cookies.remove('_dbb', {
    sameSite: 'none',
    secure: true,
  })
}

export const setIdTransaksiTopUp = (id) => {
  Cookies.set('_itP', id, { sameSite: 'none', secure: true })
}

export const getIdTransaksiTopUp = () => {
  return Cookies.get('_itP', { sameSite: 'none', secure: true })
}

export const removeIdTransaksiTopUp = () => {
  return Cookies.remove('_itP', { sameSite: 'none', secure: true })
}
