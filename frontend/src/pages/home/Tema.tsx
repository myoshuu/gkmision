import React from "react";

const Tema: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center ">
      <div className="text-4xl text-center font-light leading-[3.5rem]">
        <p>
          Hendaklah Kita{" "}
          <span className="font-medium text-blue-600">SETIA</span> <br /> sampai
          kesudahannya
        </p>
        <p>
          karena Yesus Kristus <br /> Tuhan kita adalah{" "}
          <span className="font-medium text-blue-600">SETIA</span>
        </p>
      </div>
      <p className="absolute bottom-0 p-5 text-slate-400">1 Korintus 1:8-9</p>
    </div>
  );
};

export default Tema;
