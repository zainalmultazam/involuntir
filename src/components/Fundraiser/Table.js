import Button from "../GalangDana/MenuEditGalangDana.js/index.js";
import AcceptedIcon from "../../assets/icons/AcceptedIcon";
import PendingIcon from "../../assets/icons/PendingIcon";
import RejectedIcon from "../../assets/icons/RejectedIcon";

const data = [
  {
    id: 1,
    tujuan: "Lawan Covid",
    nominal: 50000,
    email: "hotman@gmail.com",
    donatur: "Hotman Paris",
    status: "diterima",
  },
  {
    id: 2,
    tujuan: "Bangun Rumah",
    nominal: 20000,
    email: "melvin@gmail.com",
    donatur: "Melvin Tenggara",
    status: "pending",
  },
  {
    id: 3,
    tujuan: "Lumpur Lapindo",
    nominal: 10000000,
    email: "melvin@gmail.com",
    donatur: "Melvin Tenggara",
    status: "ditolak",
  },
  {
    id: 4,
    tujuan: "Yayasan Anak Yatim",
    nominal: 1000000,
    email: "kjunch@gmail.com",
    donatur: "Kim Jong Un",
    status: "pending",
  },
  {
    id: 5,
    tujuan: "PPKM Surabaya",
    nominal: 500000,
    email: "wafa22@gmail.com",
    donatur: "Tomliwafa",
    status: "diterima",
  },
];

const Table = () => {
  return (
    <div className="mt-4">
      <table className="w-full table-auto">
        <thead className="border-b border-gray-500">
          <tr>
            <th className="py-3">No.</th>

            {/*<th className="hidden py-3 pl-3">Tujuan</th>*/}
            {/*<th className="hidden py-3 pl-3">Nominal</th>*/}

            <th className="py-3 pl-3">Donatur</th>

            {/*<th className="hidden py-3 pl-3">Email</th>*/}

            <th className="py-3 pl-3 text-center">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d.id} className="border-b border-gray-200">
              <td className="text-gray-500 py-3">{d.id}</td>

              {/*<td className="hidden py-3 pl-3">*/}
              {/*  {d.tujuan}*/}
              {/*</td>*/}
              {/*<td className="hidden py-3 pl-3">*/}
              {/*  {NumberFormatter(d.nominal)}*/}
              {/*</td>*/}

              <td className="text-gray-500 py-3 pl-3">{d.donatur}</td>

              {/*<td className="hidden md:block py-3 pl-3">*/}
              {/*  {d.email}*/}
              {/*</td>*/}

              <td className="py-3 pl-3 text-right">
                {d.status === "diterima" ? (
                  <Button
                    textClass="ml-2 text-[12px]"
                    icon={AcceptedIcon}
                    variant="success"
                  >
                    Diterima
                  </Button>
                ) : d.status === "pending" ? (
                  <Button
                    textClass="ml-2 text-[12px]"
                    icon={PendingIcon}
                    variant="warning"
                  >
                    Pending
                  </Button>
                ) : d.status === "ditolak" ? (
                  <Button
                    textClass="ml-2 text-[12px]"
                    icon={RejectedIcon}
                    variant="danger"
                  >
                    Ditolak
                  </Button>
                ) : (
                  <Button>Diproses</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
