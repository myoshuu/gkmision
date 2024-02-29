import React from "react";

const Renungan: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 bg-blue-900 px-40 py-16 mt-28 w-full">
        <div className="text-white flex flex-col justify-center">
          <p className="uppercase mb-3 text-xl">Renungan</p>
          <h3 className="text-4xl font-semibold">Hendaklah Kita Setia</h3>
        </div>
        <div
          style={{ fontFamily: "IM Fell DW Pica" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute border-l h-full border-blue-200"></div>
          <div className="group cursor-pointer relative w-12 h-12 bg-white rounded-full flex items-center justify-center hover:shadow-xl hover:bg-blue-700 transition-all">
            <p className="text-black text-3xl absolute top-4 group-hover:text-white">
              "
            </p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-center">
          <div className="font-medium rounded-full w-fit px-7 py-2 bg-[#162757] shadow-lg">
            June 12, 2022
          </div>
          <p className="text-lg mt-6">
            Setia atau kesetiaan adalah salah satu unsur dari buah Roh Kudus.
            Jika kita ingin menyenangkan hati Tuhan{" "}
          </p>
          <p className="text-lg mt-8 font-semibold">1 Korintus 1:8-9</p>
        </div>
      </div>
    </div>
  );
};

export default Renungan;
