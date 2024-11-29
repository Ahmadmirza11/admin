import React from "react";
import pic from "../public/dot.png";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListOl,
  FaListUl,
  FaLink,
  FaCode,
  FaUser,
  FaSmile,
  FaImage,
  FaVideo,
  FaUndo,
  FaRedo,
  FaPlus,
} from "react-icons/fa";
import Image from "next/image";

const EmailFirm = () => {
  return (
    <div>
      <div className="bg-white p-5 rounded-lg shadow-2xl relative min-h-screen">
        <p className="text-2xl font-bold">Create Email</p>
        {/* inputs */}
        <div className="mt-7 flex justify-between items-center">
          <div>
            <label className="font-bold mb-2 block">Subject</label>
            <input
              placeholder="Enter Here"
              className="border w-96 p-2 rounded-md"
            />
          </div>
          <div>
            <p className="font-bold mb-2">Firms</p>
            <div className="border rounded-md p-2 w-96 flex space-x-2">
              <span className="border px-5 rounded-full ">Gillette</span>
              <FaPlus
                size={23}
                className="p-1 rounded-full border text-gray-500 font-thin cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* description */}
        <p className="my-5 mt-10">Description</p>
        <div className="bg-white p-5 rounded-lg shadow-xl">
          <div className="flex space-x-8">
            <button className="p-1 rounded-full text-gray-600">
              <FaUndo />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaBold />
            </button>
            <div className="border-l-2" />
            <button className="p-1 rounded-full text-gray-600">
              <FaItalic />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaUnderline />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaStrikethrough />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaListOl />
            </button>
            <div className="border-l-2 " />
            <button className="p-1 rounded-full text-gray-600">
              <FaListUl />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaLink />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaCode />
            </button>
            <div className="border-l-2" />
            <button className="p-1 rounded-full text-gray-600">
              <FaUser />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaSmile />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaImage />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaVideo />
            </button>
            <button className="p-1 rounded-full text-gray-600">
              <FaPlus />
            </button>
          </div>
        </div>
        {/* text inside the border */}
        <div className="border rounded-xl mt-16 p-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Dear (firm name) team,
          </h1>
          <p className="text-gray-700 mt-3">
            I am writing to express my strong interest in the Product Designer
            role at your company. With my passion for design, creativity, and
            user experience, I am confident that I can make a valuable
            contribution to your team.
          </p>
          <h2 className="text-xl font-semibold mt-5">What’s new</h2>
          <p className="text-gray-500 py-1">
            1-feature 1-[Brief description of feature]
            <br />
            2-feature 2-[Explanation of feature] 
            <br />
            3-feature 3-[Highlights of additional feature]
          </p>
          <h3 className="text-lg font-semibold mt-5">How to access</h3>
          <p className="text-gray-500 pt-1">
            I have five years of experience in product design. During my time as a product designer, I have honed my skills in user-centered design, prototyping, and user testing. I have worked with a wide range of products, including consumer electronics, household appliances, and furniture. My experience has taught me the importance of collaboration, attention to detail, and a user-focused approach to design.
          </p>
          <p className="text-gray-500 mt-8">
            I was particularly drawn to your company because of its reputation for innovation and its commitment to improving the lives of its users. I am excited about the opportunity to work with a team of talented designers and product managers to create meaningful and impactful products.
          </p>
          <h3 className="text-lg font-semibold">Need help?</h3>
          <p className="text-gray-500 pt-1">
            I am proficient in a variety of design tools, including Sketch, Figma, and Adobe Creative Suite. I have a strong understanding of design principles and a talent for creating intuitive and aesthetically pleasing user interfaces. I am also a quick learner, adaptable, and able to work effectively in fast-paced environments.
          </p>
          <p className="text-gray-500 mt-8">
            Thank you for considering my application. I look forward to the opportunity to further discuss my qualifications and how I can contribute to your team. Please find my portfolio attached for your review.
          </p>
          <p className="text-gray-500 mt-9">I look forward to hearing from you soon,</p>
          <p className="text-gray-500 mt-9">Munzurul Hasan</p>
          <div className="flex mt-10">
            <Image src={pic} alt="dot" />
            <p className="text-gray-500 ml-2">hasanwhat@gmail.com</p>
          </div>
        </div>
        {/* button */}
        <div className="mt-10 flex justify-end">
          <button className="text-xl font-bold bg-blue-500 px-36 py-2 text-white rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailFirm;
