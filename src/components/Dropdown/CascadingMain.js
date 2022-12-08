import "./CascadingMain.css";
import React from "react";
import { useEffect } from "react";
import { API_URL } from "config/api";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function CascadingMain() {
  const [provinsi, setProvinsi] = useState({});
  const [kota, setKota] = useState({});
  const [kecamatan, setKecamatan] = useState({});
  const [token, setToken] = useState();

  const [provinceId, setProvinceId] = useState();
  const [regencyId, setRegencyId] = useState();

  const handleProvinceId = (e) => {
    const selectedProv = provinsi.filter(
      (prov) => prov.name === e.target.value
    );
    setProvinceId(selectedProv[0].id);
    setKota([]);
    setKecamatan([]);
  };

  const handleRegencyId = (e) => {
    const selectedRegency = kota.filter((kab) => kab.name === e.target.value);
    setRegencyId(selectedRegency[0].id);
    setKecamatan([]);
  };

  // Provinsi
  useEffect(() => {
    axios
      .get(`${API_URL}/api/prov`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setProvinsi(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  // Kota
  useEffect(() => {
    axios
      .get(`${API_URL}/api/kab?provinceId=${provinceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setKota(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, provinceId]);

  // Kecamatan
  useEffect(() => {
    axios
      .get(`${API_URL}/api/kec?regencyId=${regencyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setKecamatan(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, regencyId]);

  // Dapatkan token dari Cookies
  useEffect(() => {
    let data = "";
    try {
      data = Cookies.get("token");
      setToken(data);
    } catch (e) {
      console.log(`Error occured ${e}`);
    }
  }, []);

  const select_figma_styling = {
    paddingLeft: "20px",
    paddingTop: "16px",
    paddingBottom: "16px",
    maxWidth: "374px",
    width: "100%",
    border: "1px solid #CACACA",
    appearance: "none",
    borderRadius: "30px",
  };
  const typograph_input_label = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "21.79px",
    fontStyle: "normal",
  };
  const typograph_inputbottom_label = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "21.79px",
    fontStyle: "normal",
  };

  return (
    <div className="">
      <div>
        <span className="text-base" style={typograph_input_label}>
          Pilih Provinsi
        </span>
        <div className="relative flex items-center">
          <span
            className="absolute focus:outline-none"
            style={{ right: "24px", top: "48px" }}
          ></span>
          <select
            style={select_figma_styling}
            className="mt-2"
            placeholder="Pilih Provinsi"
            onChange={(e) => handleProvinceId(e)}
          >
            <option value="" disabled selected hidden>
              Pilih Provinsi
            </option>
            {provinsi.length > 0 ? (
              provinsi.map((prov) => (
                <option id={prov.id} value={prov.name}>
                  {prov.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-base" style={typograph_inputbottom_label}>
          Pilih Kota/Kabupaten
        </span>
        <div className="relative flex items-center">
          <span
            className="absolute focus:outline-none"
            style={{ right: "24px", top: "48px" }}
          ></span>
          <select
            style={select_figma_styling}
            className="mt-2"
            placeholder="Pilih Kota/Kabupaten"
            onChange={(e) => handleRegencyId(e)}
          >
            <option value="" disabled selected hidden>
              Pilih Kota/Kabupaten
            </option>
            {kota.length > 0 ? (
              kota.map((kot) => <option value={kot.name}>{kot.name}</option>)
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-base" style={typograph_inputbottom_label}>
          Pilih Kecamatan
        </span>
        <div className="relative flex items-center">
          <span
            className="absolute focus:outline-none"
            style={{ right: "24px", top: "48px" }}
          >
            {/* <svg
              width='18'
              height='9'
              viewBox='0 0 18 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.92 0.949951L10.4 7.46995C9.62996 8.23995 8.36996 8.23995 7.59996 7.46995L1.07996 0.949951'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg> */}
          </span>
          <select
            style={select_figma_styling}
            className="mt-2"
            placeholder="Pilih Kecamatan"
          >
            <option value="" disabled selected hidden>
              Pilih Kecamatan
            </option>
            {kecamatan.length > 0 ? (
              kecamatan.map((kec) => (
                <option value={kec.name}>{kec.name}</option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
