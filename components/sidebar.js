"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiGooglemessages } from "react-icons/si";
import { FaBuilding, FaChevronDown, FaChevronUp, FaBell, FaUsers, FaEnvelopeOpenText, FaCog, FaClipboardList } from "react-icons/fa";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";
import pic from "../app/public/mainlogo.png";
import { useRouter } from "next/navigation";
// Placeholder for profile image URL
const profileImageUrl = "https://via.placeholder.com/150";

// Sidebar items
const sideitems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <AiFillDashboard />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Companies/Firms",
    icon: <FaBuilding />,
    options: [
      { name: "All Companies", link: "/companies-Firm" },
      { name: "Companies Subscriptions", link: "/subscription" },
      { name: "Subscription Transactions", link: "/Subscription-transactions" },
    ],
  },
  {
    id: 3,
    name: "Packages",
    icon: <SiGooglemessages />,
    link: "/packages",
  },
  {
    id: 4,
    name: "Staff Management",
    icon: <MdOutlineManageAccounts />,
    options: [
      { name: "Staff", link: "/staff" },
      { name: "Role and Permission", link: "/staffManagement(role)" },
      { name: "Email Firms", link: "/emailFirm" },
      { name: "Email Configuration", link: "/emailConfiguration" },
      { name: "Landing Page Settings", link: "/landingPageSetting" },
      { name: "My Clients", link: "/myClient" },
    ],
  },
];

// Custom scrollbar styles
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
  const router = useRouter();

  const toggleDropdown = (name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNavigation = (link) => {
    router.push(link);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <style>{scrollbarStyles}</style>
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col justify-between overflow-y-auto shadow-lg fixed h-full">
        <div className="p-6">
          <Image src={pic} alt="Logo" className="mx-auto w-32 h-auto" />
          <div className="mt-6 space-y-2">
            {sideitems.map((item) => {
              if (item.name === "Companies/Firms") {
                return (
                  <div key={item.id} className="mb-2">
                    <div
                      className="flex items-center justify-between hover:bg-gray-800 rounded-lg p-2 cursor-pointer transition duration-200 ease-in-out"
                      onClick={() => toggleDropdown("companies")}
                    >
                      <div className="flex items-center">
                        <div className="text-white">{item.icon}</div>
                        <span className="ml-3">{item.name}</span>
                      </div>
                      <div className="text-white">
                        {dropdownOpen.companies ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    {dropdownOpen.companies && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.options.map((option, index) => (
                          <button
                            key={index}
                            className={`w-full flex items-center text-left py-2 px-4 rounded-lg focus:outline-none transition duration-200 ease-in-out ${
                              selectedOption === option.name
                                ? "bg-indigo-500 text-white"
                                : "hover:bg-gray-800 text-gray-300"
                            }`}
                            onClick={() => {
                              handleNavigation(option.link);
                              handleOptionSelect(option.name);
                            }}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.name === "Packages") {
                return (
                  <button
                    key={item.id}
                    className="flex items-center hover:bg-gray-800 rounded-lg p-2 mb-2 cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => handleNavigation(item.link)}
                  >
                    <div className="text-white mr-2">{item.icon}</div>
                    <span>{item.name}</span>
                  </button>
                );
              }

              if (item.name === "Staff Management") {
                return (
                  <div key={item.id} className="mb-2">
                    <div
                      className="flex items-center justify-between hover:bg-gray-800 rounded-lg p-2 cursor-pointer transition duration-200 ease-in-out"
                      onClick={() => toggleDropdown("staff")}
                    >
                      <div className="flex items-center">
                        <div className="text-white">{item.icon}</div>
                        <span className="ml-3">{item.name}</span>
                      </div>
                      <div className="text-white">
                        {dropdownOpen.staff ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    {dropdownOpen.staff && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.options.map((option, index) => (
                          <button
                            key={index}
                            className={`w-full flex items-center text-left py-2 px-4 rounded-lg focus:outline-none transition duration-200 ease-in-out ${
                              selectedOption === option.name
                                ? "bg-indigo-500 text-white"
                                : "hover:bg-gray-800 text-gray-300"
                            }`}
                            onClick={() => {
                              handleNavigation(option.link);
                              handleOptionSelect(option.name);
                            }}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  className="flex items-center hover:bg-gray-800 rounded-lg p-2 mb-2 cursor-pointer transition duration-200 ease-in-out"
                  onClick={() => handleNavigation(item.link)}
                >
                  <div className="text-white mr-2">{item.icon}</div>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 ml-64 overflow-y-auto">
        {/* Navbar */}
        <div className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md ">
          <div className="text-xl font-semibold">{navTitle}</div>
          <div className="flex items-center space-x-4">
            <Image
              src={pic}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
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
        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
