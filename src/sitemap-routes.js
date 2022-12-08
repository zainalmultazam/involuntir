import React from "react";
import { Route, Switch } from "react-router-dom";

export default (
  <Switch>
    <Route path="/" />
    <Route path="/register" />
    <Route path="/register/verifikasi-email" />
    <Route path="/register/verifikasiBerhasil" />
    <Route path="/login" />

    <Route path="/DonasiSelesai" />
    <Route path="/InstruksiPembayaranCod" />
    <Route path="/MetodePembayaran" />
    <Route path="/dashboard/RingkasanFundRaiser" />
    <Route path="/donasi-sekali/:slug" />
    <Route path="/donasi-rutin/:slug" />

    <Route path="/dashboard" />
    <Route path="/ubah-profile/:id" />
    <Route path="/profile/:id" />
    <Route path="/rekening/:id" />
    <Route path="/verifikasiAkun/:tipe" />

    <Route path="/donasi/:slug" />

    <Route path="/riwayat" />
    <Route path="/riwayat/detail/:slug" />

    <Route path="/InstruksiPembayaran" />
    <Route path="/pengaturan" />
    <Route path="/riwayatDonasi" />
    <Route path="/pengingatDonasi" />
    <Route path="/password/change/:token" />
    <Route path="/password/lupa" />
    <Route path="/password/cek-email" />
    <Route path="/password/reset" />
    <Route path="/password/reset/berhasil" />
    <Route path="/simpan" />
    <Route path="/notifikasi" />
    <Route path="/lanjut-donasi-anonim" />
    <Route path="/lanjut-donasi-user" />
    <Route path="/auth/google" />
    <Route />
  </Switch>
);
