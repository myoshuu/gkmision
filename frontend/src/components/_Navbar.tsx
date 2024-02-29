"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="fixed w-full pt-3 z-50 bg-white">
      <div className="flex items-center justify-around">
        <img className="w-28" src="./assets/logogkmi.webp" alt="" />
        <div className="h-full">
          <ul className="flex gap-x-5 h-full">
            <li className="hover:text-blue-700 transition-colors">
              <a href="#">Home</a>
            </li>
            <li
              className="flex gap-x-2 items-center transition-colors cursor-pointer h-full"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a className="hover:text-blue-700" href="#">
                Tentang
              </a>
              <IconChevronDown
                className="hover:text-blue-700"
                strokeWidth={2}
                width={16}
              />
              {showDropdown && (
                <div className="absolute top-[58px] w-full left-0 mt-5 flex gap-x-16 shadow-[0_-1px_5px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.05)] bg-white transition-all duration-200">
                  <div className="bg-blue-900 w-3"></div>
                  <div className="py-12 flex justify-between w-1/2">
                    <div>
                      <h3 className="text-[20px] font-semibold uppercase">
                        Gereja
                      </h3>
                      <ul className="mt-6 flex flex-col gap-y-4 text-lg">
                        <li>Visi & Misi</li>
                        <li>Sejarah Berdirinya Gereja</li>
                        {/* <li>Renungan</li> */}
                        {/* <li>Jadwal Kebaktian</li> */}
                        <li>Hamba Tuhan</li>
                        <li>Penatua & Diaken</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-12">
                      <div>
                        <h3 className="text-[20px] font-semibold uppercase">
                          Jemaat
                        </h3>
                        <ul className="mt-5 flex flex-col gap-y-3 text-lg">
                          <li>Pendataan</li>
                          <li>Warta Jemaat</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-semibold uppercase">
                          Parachurch
                        </h3>
                        <ul className="mt-5 flex flex-col gap-y-3 text-lg">
                          <li>KB Paud Cempaka</li>
                          <li>PPA ID 600</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="hover:text-blue-700 transition-colors">
              <a href="#">Renungan</a>
            </li>
            <li className="hover:text-blue-700 transition-colors">
              <a href="#">Jadwal</a>
            </li>
            <li className="hover:text-blue-700 transition-colors">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="border rounded-full px-8 py-3 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-500">
          Watch!
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
