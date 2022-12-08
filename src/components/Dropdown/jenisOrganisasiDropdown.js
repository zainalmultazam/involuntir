/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { API_URL } from "config/api";
import { useState } from "react";
import Cookies from "js-cookie";

const TipeOrganisasiDropdown = () => {
  const [tipeOrganisasi, setTipeOrganisasi] = useState({});
  const [token, setToken] = useState();

  const select_figma_styling = {
    paddingLeft: "20px",
    paddingTop: "16px",
    paddingBottom: "16px",
    maxWidth: "374px",
    width: "100%",
    border: "1px solid #CACACA",
    appearance: "none !important",
    style: "none",
    borderRadius: "30px",
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/organisasi`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTipeOrganisasi(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    let data = "";
    try {
      data = Cookies.get("token");
      setToken(data);
    } catch (e) {
      console.log(`Error occured ${e}`);
    }
  }, []);

  return (
    <div className="">
      <div className="relative flex items-center">
        <select
          style={select_figma_styling}
          className="mt-2 selectFigmaStyling"
        >
          {tipeOrganisasi.length > 0 ? (
            tipeOrganisasi.map((organisasi) => (
              <option value={organisasi.jenis_lembaga}>
                {organisasi.jenis_lembaga}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default TipeOrganisasiDropdown;
