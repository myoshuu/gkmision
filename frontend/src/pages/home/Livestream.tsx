import React from "react";

const Livestream: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-16 my-28">
        <div className="flex justify-end">
          <div className="px-10 py-20 text-white bg-[#162757] max-w-[45%]">
            <p className="uppercase font-light tracking-wide">Minggu 1</p>
            <h3 className="mt-5 text-3xl font-medium">
              Menjadi Terang dan Garam
            </h3>
            <div className="mt-6">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                vel enim temporibus culpa provident adipisci architecto sequi
                aperiam eius obcaecati.
              </p>
            </div>
            <div className="mt-10">
              <div>
                <p className="text-lg font-semibold">Pdt. Edy Pangangkat</p>
                <p className="mt-2 italic font-light">
                  Sunday, 12 January 2023 | 09.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-10 max-w-[45%]">
          <div>
            <p className="uppercase font-light tracking-wide">
              kebaktian minggu
            </p>
            <h3 className="mt-4 text-3xl font-medium leading-tight">
              Ayo bergabung dan Beribadah bersama kami
            </h3>
            <p className="mt-5">
              Mari kita bersama bertembuh didalam Tuhan dan menjadi sukacita
              bagi semua orang
            </p>
            <div className=" rounded-full px-5 py-3 border border-[#162757] text-black w-fit mt-5 hover:border hover:bg-[#162757] hover:text-white transition-all cursor-pointer">
              Watch Now!
            </div>
            {/* <div className="border rounded-full px-8 py-3 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-500 w-fit">
              Watch!
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestream;
