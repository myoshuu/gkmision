import React from "react";

const About: React.FC = () => {
  return (
    <div className="mt-44">
      <p className="uppercase text-slate-400 tracking-wide mb-3 text-center">
        Sejarah Gereja
      </p>
      <h3 className="text-4xl font-medium tracking-wide text-slate-600 text-center">
        GKMI Pembawa Damai
      </h3>
      <div className="max-w-[1035px] mx-auto mt-10 relative">
        <img
          className="rounded-lg shadow-lg"
          src="./assets/fotojemaat.webp"
          alt=""
        />
        <div className="grid grid-cols-2 mt-10 gap-12">
          <p className="text-justify">
            Pada Pertengahan tahun 2015, Tuhan memberi kita kesempatan untuk
            merenovasi gedung gereja dan diselesaikan pada tahun 2016 serta
            dapat dipergunakan sebagaimana mestinya sampai saat ini. Dari
            peristiwa demi peristiwa yang sudah kita lalui, jemaat belajar
            semakin percaya bahwa kekuatan sesungguhnya dari gereja adalah YESUS
            KRISTUS itu sendiri, semua yang dilakukan hanya untuk ‘memuliakan
            Dia’ Dengan bermodalkan iman, ketekunan serta semangat Rohani yang
            tinggi, GKMI Sion dapat berdiri.
          </p>
          <p className="text-justify">
            Dengan semangat yang sama ketika merintis dan membangun jemaat,
            sampai saat ini semangat itu pula yang menjadi roh memelihara
            jemaat, menjadi tiang penopang dan dasar kebenaran. Iman,
            Pengharapan dan Kasih kepada Yesus sebagai Kepala Gereja melandasi
            jemaat untuk melayani, berjuang dan bekerja terus sampai Yesus
            datang kembali. Amin.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-fit border border-slate-300 rounded-full px-12 py-3 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-500">
            See more
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
