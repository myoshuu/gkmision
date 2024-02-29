import React from "react";
const VisiMisi: React.FC = () => {
  return (
    <div id="visimisi" className="mt-28">
      <div>
        <p className="uppercase text-slate-400 tracking-wide mb-3 text-center">
          visi & misi
        </p>
        <h3 className="text-4xl font-medium tracking-wide text-slate-600 text-center">
          Visi dan Misi GKMI Sion
        </h3>
      </div>
      <div className="relative">
        <div className="mt-20 grid grid-cols-2 gap-x-10">
          <div className="flex justify-end">
            <div className="">
              <img
                className="w-[350px] h-[450px] shadow-lg rounded-lg"
                src="./assets/visimisi1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-[340px]">
            <p className="mt-20 text-3xl font-semibold tracking-widest uppercase">
              visi
            </p>
            <p className="uppercase text-xl mt-5">
              Dari Dia - Oleh Dia - Kepada Dia
            </p>
            <p className="text-xl italic font-medium">Roma 11:36</p>
            <p className="italic text-xl font-light tracking-wide text-justify">
              {" "}
              “Sebab segala sesuatu adalah dari Dia, dan oleh Dia, dan kepada
              Dia: Bagi Dialah kemuliaan sampai selama-lamanya!”{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex justify-end">
            <div className="w-[340px] h-[500px]">
              <p className="mt-16 text-3xl font-semibold tracking-widest uppercase">
                misi
              </p>
              <div className="flex flex-col gap-y-3">
                <p className="mt-5 text-xl font-light tracking-wide ">
                  Menjadi ciptaan baru dan siap melakukan kehendak Tuhan
                </p>
                <p className="text-xl font-light tracking-wide ">
                  Siap Beraksi kepada jiwa-jiwa yang terhilang
                </p>
                <p className="text-xl font-light tracking-wide ">
                  Menjadi komunitas damai yang memberkati semua orang
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="">
              <img
                className="absolute bottom-28 w-[350px] h-[450px] shadow-lg rounded-lg"
                src="./assets/visimisi2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
