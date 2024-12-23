"use client";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaEye,
} from "react-icons/fa";
import Image from "next/image";
import Modal from "react-modal";
import darrellImage from "../app/public/dp.jpg";
import arleneImage from "../app/public/bill.jpg";
import ralphImage from "../app/public/dp.jpg";
import cameronImage from "../app/public/bill.jpg";
import kathrynImage from "../app/public/bill.jpg";
import { useRouter } from "next/navigation";

// Complete clients data array
const clients = [
  {
    id: 1,
    name: "Darrell Steward",
    contact: "john@example.com",
    address: "3890 Poplar Dr.",
    plan: "VAT Returns",
    status: "active",
    image: darrellImage,
  },
  {
    id: 2,
    name: "Arlene McCoy",
    contact: "arlene@example.com",
    address: "2470 Apple St.",
    plan: "Payroll Management",
    status: "converted",
    image: arleneImage,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    contact: "ralph@example.com",
    address: "3785 Pine St.",
    plan: "Tax Returns",
    status: "pending",
    image: ralphImage,
  },
  {
    id: 4,
    name: "Cameron Williamson",
    contact: "cameron@example.com",
    address: "452 Maple Ave.",
    plan: "Financial Consulting",
    status: "converted",
    image: cameronImage,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    contact: "kathryn@example.com",
    address: "823 Birch St.",
    plan: "Budget Planning",
    status: "active",
    image: kathrynImage,
  },
];

const statusStyles = {
  active: "bg-green-200 text-green-800",
  pending: "bg-yellow-200 text-yellow-800",
  inactive: "bg-red-200 text-red-800",
  converted: "bg-blue-200 text-blue-800",
};

const LeadTable = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentClient, setCurrentClient] = useState(null);
  const [clientList, setClientList] = useState(clients);

  const openModal = (status, client) => {
    setSelectedStatus(status);
    setCurrentClient(client);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedStatus("");
    setCurrentClient(null);
  };

  const statusOptions = ["active", "pending", "inactive", "converted"];

  const saveStatusChange = () => {
    if (currentClient) {
      const updatedClients = clientList.map((client) =>
        client.id === currentClient.id
          ? { ...client, status: selectedStatus }
          : client
      );
      setClientList(updatedClients);
      closeModal();
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-white p-5 shadow-xl rounded-xl">
        <div className="flex justify-between mb-4">
          <p className="text-xl font-bold">My Clients</p>
          <div className="flex space-x-2">
            <button className="border px-4 py-2 rounded flex items-center">
              <FaSearch className="mr-2" />
              Search
            </button>
            <button className="border px-4 py-2 rounded flex items-center">
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-gray-600">#</th>
                <th className="py-3 px-4 text-left text-gray-600">Client Name</th>
                <th className="py-3 px-4 text-left text-gray-600">Contact Info</th>
                <th className="py-3 px-4 text-left text-gray-600">Address</th>
                <th className="py-3 px-4 text-left text-gray-600">Plan</th>
                <th className="py-3 px-4 text-left text-gray-600">Plan Status</th>
                <th className="py-3 px-4 text-right text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {clientList.map((client) => (
                <tr key={client.id} className="border-b">
                  <td className="py-3 px-3 text-left text-gray-600">{client.id}</td>
                  <td className="py-3 px-3 text-left text-gray-600 flex items-center">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    {client.name}
                  </td>
                  <td className="py-3 px-3 text-left text-gray-600">{client.contact}</td>
                  <td className="py-3 px-3 text-left text-gray-600">{client.address}</td>
                  <td className="py-3 px-3 text-left text-gray-600">{client.plan}</td>
                  <td className="py-3 px-3 text-left text-gray-600">
                    <span
                      className={`px-2 py-1 rounded-full cursor-pointer ${
                        statusStyles[client.status]
                      }`}
                      onClick={() => openModal(client.status, client)}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button className="mx-1 bg-blue-500 rounded-full p-1 text-white hover:bg-blue-600">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="mx-1 px-5 py-2 border rounded flex items-center">
            <FaArrowLeft className="mr-1" />
            Previous
          </button>
          <button
            className="mx-1 px-5 py-2 border rounded flex items-center text-gray-500 bg-gray-200 cursor-not-allowed"
            disabled
          >
            Next
            <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-5"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-80"
      >
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">
            Change Status for {currentClient ? currentClient.name : ""}
          </h2>
          <div className="space-y-2 mb-4">
            {statusOptions.map((status) => (
              <div key={status} className="flex items-center">
                <input
                  type="radio"
                  id={status}
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={() => setSelectedStatus(status)}
                  className="mr-2"
                />
                <label htmlFor={status} className="cursor-pointer">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={saveStatusChange}
              className="bg-blue-500 text-white rounded px-4 py-2 mr-2 hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LeadTable;