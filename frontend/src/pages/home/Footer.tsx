import { Link as ScrollLink } from "react-scroll";
import { Church, Envelope, Phone } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 px-28 py-16 bg-[rgb(22,35,62)] text-white">
      <h3 className="text-3xl font-medium">Contact Us</h3>
      <div className="mt-12 grid grid-cols-3">
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-x-5 items-start">
            <Church size={30} weight="fill" />
            <div>
              <h4 className="uppercase text-lg">GKMI Sion Kubu Raya</h4>
              <p className="mt-3 text-normal font-light">
                Jl. Adi Sucipto Gg. Cempaka Putih <br /> No. 53 A-B, Parit Baru
              </p>
            </div>
          </div>
          <div className="flex gap-x-5 items-start">
            <Envelope size={30} weight="fill" />
            <div>
              <h4 className=" text-normal font-light">gkmision@gmail.com</h4>
            </div>
          </div>
          <div className="flex gap-x-5 items-start">
            <Phone size={30} weight="fill" />
            <div>
              <h4 className=" text-normal font-light">0561-721512 (Gereja)</h4>
            </div>
          </div>
        </div>
        <ul className="font-extralight text-[20px] space-y-5">
          <li className="cursor-pointer">
            <ScrollLink to="tema" smooth={true}>
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="renungan" smooth={true} offset={-70}>
              Renungan
            </ScrollLink>
          </li>
          <li className="cursor-pointer">Visi & Misi</li>
          <li className="cursor-pointer">Jadwal Kebaktian</li>
          <li className="cursor-pointer">Hamba Tuhan, Penatua & Diaken</li>
        </ul>
        <ul className="font-extralight text-[20px] space-y-5">
          <li className="cursor-pointer">Informasi PAUD Cempaka</li>
          <li className="cursor-pointer">Informasi PPA Muria Kasih</li>
          <li className="cursor-pointer">Warta Jemaat</li>
          <li className="cursor-pointer">Sejarah</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
