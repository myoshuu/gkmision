import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CaretDown } from "@phosphor-icons/react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isHovering) {
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsHovering(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHovering(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full flex items-center justify-evenly z-50 bg-white">
      <img className="w-28" src="./assets/logogkmi.webp" alt="" />
      <ul className="h-20 flex gap-x-5 items-center">
        <li
          className="cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(false)}
        >
          <ScrollLink to="tema" smooth={true} offset={-110}>
            Home
          </ScrollLink>
        </li>
        <li
          className="transition-all"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-x-2">
            <a href="#">Tentang</a>
            <CaretDown size={16} />
          </div>
          <div
            className={`absolute left-0 top-20 w-full px-16 bg-white transition-all duration-300 opacity-0 shadow-[0_-1px_5px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.05)] ${
              isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="absolute left-0 h-full bg-blue-900 w-3"></div>
            <div className="flex items-center justify-between">
              <div className="py-12 flex justify-between w-1/3">
                <div>
                  <h3 className="text-[20px] font-semibold uppercase">
                    Gereja
                  </h3>
                  <ul className="mt-6 flex flex-col gap-y-4 text-lg">
                    <li className="cursor-pointer w-fit nav-link">
                      <ScrollLink
                        onClick={() => setIsDropdownOpen(false)}
                        to="visimisi"
                        smooth={true}
                        offset={-110}
                      >
                        Visi & Misi
                      </ScrollLink>
                    </li>
                    <li className="cursor-pointer w-fit nav-link">
                      <ScrollLink
                        onClick={() => setIsDropdownOpen(false)}
                        to="sejarah"
                        smooth={true}
                        offset={-85}
                      >
                        Sejarah berdirinya Gereja
                      </ScrollLink>
                    </li>
                    <li className="cursor-pointer w-fit nav-link">
                      <ScrollLink
                        onClick={() => setIsDropdownOpen(false)}
                        to="livestream"
                        smooth={true}
                        offset={-245}
                      >
                        Livestream
                      </ScrollLink>
                    </li>
                    <li className="cursor-pointer w-fit nav-link">
                      Hamba Tuhan
                    </li>
                    <li className="cursor-pointer w-fit nav-link">
                      Penatua & Diaken
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-12">
                  <div>
                    <h3 className="text-[20px] font-semibold uppercase">
                      Jemaat
                    </h3>
                    <ul className="mt-5 flex flex-col gap-y-3 text-lg">
                      <li className="cursor-pointer w-fit nav-link">
                        Pendataan
                      </li>
                      <li className="cursor-pointer w-fit nav-link">
                        Warta Jemaat
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold uppercase">
                      Parachurch
                    </h3>
                    <ul className="mt-5 flex flex-col gap-y-3 text-lg">
                      <li className="cursor-pointer w-fit nav-link">
                        KB Paud Cempaka
                      </li>
                      <li className="cursor-pointer w-fit nav-link">
                        PPA ID 600
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-10">
                {/* Make Card with image */}
                <div className="w-80 h-80">
                  <img
                    src="./assets/sm.webp"
                    alt=""
                    className="w-80 h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="w-80 h-80">
                  <img
                    src="./assets/ultah.webp"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="w-80 h-80">
                  <img
                    src="./assets/priskilla.webp"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          className="cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(false)}
        >
          <ScrollLink to="renungan" smooth={true} offset={-70}>
            Renungan
          </ScrollLink>
        </li>
        <li
          className="cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(false)}
        >
          <ScrollLink to="jadwal" smooth={true} offset={-70}>
            Jadwal
          </ScrollLink>
        </li>
        <li onMouseEnter={() => setIsDropdownOpen(false)}>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div
        onMouseEnter={() => setIsDropdownOpen(false)}
        className="border rounded-full px-8 py-3 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-500"
      >
        Watch!
      </div>
    </nav>
  );
};

export default Navbar;
