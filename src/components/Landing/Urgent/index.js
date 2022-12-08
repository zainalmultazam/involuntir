import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";
import IdrFormat from "utils/IdrFormat";
import SkeletonDonasiVertikal from "components/SkeletonDonasiVertikal";
import axios from "axios";
import { API_URL } from "config/api";

export const Urgent = () => {
  const [newUrgent, setNewUrgent] = useState([]);
  const [dataStatus, setDataStatus] = useState("pending");

  useEffect(() => {
    axios.get(`${API_URL}/api/urgent`).then((res) => {
      if (res.data.data.length > 0) {
        // Menambahkan data dari server ke state local
        setNewUrgent(res.data.data);
      }
    });
  }, []);

  useEffect(() => {
    // Side effect untuk jika tidak ada data urgent
    setDataStatus("pending");
    if (newUrgent.length === 0) {
      setDataStatus("nodata");
    }
  }, [newUrgent]);

  useEffect(() => {
    if (!!window.sessionStorage.getItem("value")) {
      window.sessionStorage.clear();
    }
  }, []);

  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay);
    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000;
      const secondDate = new Date();
      const diffDays = Math.round((firstDate - secondDate) / oneDay);
      if (diffDays <= 0) {
        return "Berakhir";
      }
      return diffDays;
    }
    return "Tanpa batas";
  }

  return (
    <>
      <div style={{ marginTop: "24px" }}>
        <div className="flex flex-wrap justify-between content-end p-main">
          <div>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Butuh Bantuan Mendesak
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-peduly-primary text-basic">Lihat semua</p>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "16px" }}
        className="overflow-mini-card p-main pb-[46px]"
      >
        {newUrgent.length > 0 ? (
          newUrgent.map((val, i) => (
            <Link to={`/donasi-sekali/${val.judul_slug}`} key={i}>
              <div
                style={{
                  height: "294px",
                  width: "211px",
                  margin: "0px 8px",
                  whiteSpace: "normal",
                }}
                className="rounded-[15px] shadow-md inline-block"
              >
                <img
                  src={`${API_URL}/images/images_campaign/${val.foto_campaign}`}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                  }}
                  className="rounded-t-[15px]"
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/no-picture.png";
                  }}
                />
                <div
                  style={{
                    paddingRight: "18px",
                    paddingLeft: "18px",
                    marginTop: "35px",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {val.judul_campaign}
                  </p>
                  <div
                    style={{ margin: "15px 0px 9px 0px" }}
                    className="flex items-center"
                  >
                    <img
                      src="https://peduly.com/icon/dashboard/logo-hand.png"
                      style={{ width: "16px", height: "16px" }}
                      className="rounded-full"
                      alt=""
                    />
                    <p
                      style={{
                        fontSize: "10px",
                        marginLeft: "4px",
                      }}
                    >
                      {val.name}
                    </p>
                  </div>
                  <div>
                    <ProgressBar
                      current={val.current_donation ? val.current_donation : 0}
                      target={val ? val.nominal_campaign : 0}
                    />
                  </div>

                  <div
                    className="flex flex-row justify-between"
                    style={{ marginTop: "11px" }}
                  >
                    <div>
                      <p style={{ fontSize: "11px" }}>Terkumpul</p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                        }}
                      >
                        Rp{" "}
                        {IdrFormat(
                          val.current_donation ? val.current_donation : 0
                        )}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px" }}>Sisa Hari</p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                        }}
                      >
                        {dayToGo(val.batas_waktu_campaign)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : dataStatus === "nodata" ? (
          <div>
            <p>Data tidak tersedia</p>
          </div>
        ) : (
          <div>
            <SkeletonDonasiVertikal />
          </div>
        )}
      </div>
    </>
  );
};
