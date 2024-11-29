"use client";
import AboutUsSectionSetting from "@/components/aboutUseSetting";
import ColorSetting from "@/components/colorSetting";
import CreateFeatureSection from "@/components/createFeatureSection";
import DownloadSectionSetting from "@/components/downloadSectionSetting";
import TextEditor from "@/components/footerSectionSetting";
import HeroSectionSetting from "@/components/heroSectionSetting";
import PackageSectionSetting from "@/components/packageSectionSetting";
import SocialMediaSettinds from "@/components/SocialMediaSettinds";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ListSectionsTable from "@/components/listSectionTable";
import CreateFaqs from "@/components/CreateFaqs";
import ListFaqs from "@/components/listFaqs";
const LandingPageSetting = () => {
  const [activeTab, setActiveTab] = useState("General Settings");

  return (
    <div>
      <div className="bg-white p-2 rounded-lg shadow-2xl">
        <p className="text-xl font-bold">Good morning, Jake</p>
        <div className="flex space-x-4 mt-5">
          {["General Settings", "Feature Section", "FAQs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 text-lg ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 ">
        {activeTab === "General Settings" && (
          <div>
            {/* general */}
            <ColorSetting />
            <HeroSectionSetting />
            <AboutUsSectionSetting />
            <PackageSectionSetting />
            <DownloadSectionSetting />
            <TextEditor />
            <SocialMediaSettinds />
          </div>
        )}
        {/* 2 */}
        {activeTab === "Feature Section" && (
          <div>
            <CreateFeatureSection />

            {/* button */}
            <div className="flex justify-center items-center my-10">
              <button className="border bg-white py-2 shadow-xl rounded-lg flex items-center px-32">
                <FontAwesomeIcon icon={faPlus} className="mr-2 bg-blue-400 rounded-full p-1 text-white" /> Add Section
              </button>
            </div>
            {/*  */}
            <ListSectionsTable/>
          </div>
        )}
        {activeTab === "FAQs" && <div>
            <CreateFaqs/>
            {/* button */}
            <div className="flex justify-center items-center my-10">
              <button className="border bg-white py-2 shadow-xl rounded-lg flex items-center px-32">
                <FontAwesomeIcon icon={faPlus} className="mr-2 bg-blue-400 rounded-full p-1 text-white" /> Add Faqs
              </button>
            </div>
            {/*  */}
            <ListFaqs/>
            </div>}
      </div>
    </div>
  );
};

export default LandingPageSetting;
