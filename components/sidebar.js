"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBell, FaBuilding, FaChevronDown, FaChevronUp, FaUsers, FaEnvelopeOpenText, FaClipboardList } from "react-icons/fa";
import { MdDashboard, MdOutlineManageAccounts, MdSubscriptions, MdOutlineEmail } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import pic from "../app/public/mainlogo.png";

// Define the sidebar items structure
const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdDashboard />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Lead Management",
    icon: <FaUsers />,
    link: "/leadManagement",
  },
  {
    id: 6,
    name: "Business", // This is the new Business page
    icon: <MdDashboard />,
    link: "/business",
  },
  {
    id: 3,
    name: "Companies/Firms",
    icon: <FaBuilding />,
    options: [
      { name: "All Companies", icon: <FaBuilding />, link: "/companies-Firm" },
      { name: "Companies Subscriptions", icon: <MdSubscriptions />, link: "/subscription" },
      { name: "Subscription Transactions", icon: <FaClipboardList />, link: "/Subscription-transactions" },
    ],
  },
  {
    id: 4,
    name: "Packages",
    icon: <SiGoogleclassroom />,
    link: "/packages",
  },
  {
    id: 5,
    name: "Staff Management",
    icon: <MdOutlineManageAccounts />,
    options: [
      { name: "Staff", icon: <FaUsers />, link: "/staff" },
      { name: "Role and Permission", icon: <AiFillSetting />, link: "/staffManagement(role)" },
      { name: "Email Firms", icon: <FaEnvelopeOpenText />, link: "/emailFirm" },
      { name: "Email Configuration", icon: <MdOutlineEmail />, link: "/emailConfiguration" },
    ],
  },
];

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1f2937;
  }
  ::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
`;

export default function Sidebar({ children, navTitle }) {
  const [dropdownOpen, setDropdownOpen] = useState({
    companies: false,
    staff: false,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  // Set selected option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <style>{scrollbarStyles}</style>

      <div className="w-64 bg-black text-white flex flex-col justify-between overflow-y-auto shadow-lg fixed h-full">
        <div className="p-6">
          {/* Logo */}
          <Image src={pic} alt="Logo" className="mx-auto w-32 h-auto" />
          <div className="mt-6 space-y-2">
            {/* Loop through sidebar items */}
            {sidebarItems.map((item) => {
              if (item.options) {
                return (
                  <div key={item.id} className="mb-2">
                    {/* Toggle button for dropdown */}
                    <div
                      className="flex items-center justify-between hover:bg-gray-800 rounded-lg p-2 cursor-pointer transition duration-200 ease-in-out"
                      onClick={() => toggleDropdown(item.name.toLowerCase())}
                    >
                      <div className="flex items-center">
                        {item.icon && <div className="text-white">{item.icon}</div>}
                        <span className="ml-3">{item.name}</span>
                      </div>
                      <div className="text-white">
                        {dropdownOpen[item.name.toLowerCase()] ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    {dropdownOpen[item.name.toLowerCase()] && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.options.map((option, index) => (
                          <Link href={option.link} key={index}>
                            <span
                              className={`w-full flex items-center text-left py-2 px-4 rounded-lg focus:outline-none transition duration-200 ease-in-out text-xs ${
                                selectedOption === option.name
                                  ? "bg-blue-400 text-white whitespace-nowrap"
                                  : "hover:bg-gray-800 text-gray-300 whitespace-nowrap"
                              }`}
                              onClick={() => handleOptionSelect(option.name)}
                            >
                              <span className="mr-2">{option.icon}</span>
                              {option.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link href={item.link} key={item.id}>
                  <span
                    className={`w-full flex items-center hover:bg-gray-800 rounded-lg p-2 mb-2 cursor-pointer transition duration-200 ease-in-out ${
                      selectedOption === item.name ? "bg-blue-400 text-white" : "text-gray-300"
                    }`}
                    onClick={() => handleOptionSelect(item.name)}
                  >
                    <div className="text-white mr-2">{item.icon}</div>
                    <span>{item.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 ml-64 overflow-y-auto">
        <div className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
          <div className="text-xl font-semibold">{navTitle}</div>
          <div className="flex items-center space-x-4">
            <Image src={pic} alt="Profile" className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-medium">John</p>
              <p className="text-sm text-gray-400">Super Admin</p>
            </div>
            <div className="relative">
              <FaBell className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            </div>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
