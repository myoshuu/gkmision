import React from "react";
import Card from "../../components/Card";

const Jadwal: React.FC = () => {
  return (
    <div className="px-24 my-28">
      <div>
        <p className="uppercase text-slate-400 tracking-wide mb-3 text-center">
          Jadwal Kebaktian
        </p>
        <h3 className="text-4xl font-medium tracking-wide text-slate-600 text-center">
          Jadwal Kebaktian Gereja GKMI Sion
        </h3>
      </div>
      <div className="mt-12 flex items-center gap-8 justify-center flex-wrap">
        {" "}
        <Card title="Persekutuan Rumah Tangga" date="Selasa, 18.30 WIB" />
        <Card title="Persekutuan Doa" date="Kamis, 18.30 WIB" />
        <Card title="Persekutuan Pemuda" date="Selasa, 18.30 WIB" />
        <Card title="Persekutuan Rumah Tangga" date="Selasa, 18.30 WIB" />
        <Card title="Persekutuan Rumah Tangga" date="Selasa, 18.30 WIB" />
      </div>
    </div>
  );
};

export default Jadwal;
