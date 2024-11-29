"use client"
import { FilterList, Search, Delete, Edit, ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const firms = [
  {
    reg: "01",
    name: "Acme Co.",
    email: "john@gmail.com",
  },
  {
    reg: "02",
    name: "Acme Co.",
    email: "john@gmail.com",
  },
  {
    reg: "03",
    name: "Acme Co.",
    email: "john@gmail.com",
  },
  {
    reg: "04",
    name: "Acme Co.",
    email: "john@gmail.com",
  },
  {
    reg: "05",
    name: "Acme Co.",
    email: "john@gmail.com",
  },
];

const RoleAndPermissionList = () => {
  const router=useRouter()
  const checkboxPage=()=>{
    router.push("/staffManagement(role)2")
  }
  return (
    <div className="mt-5">
      <div className="bg-white p-5 shadow-lg shadow-slate-400 rounded-lg">
        {/* buttons  and title */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">List</p>
          <div className="flex space-x-2">
            <Button
              variant="outlined"
              startIcon={<Search />}
              className="border-gray-500 text-gray-500"
            >
              Search
            </Button>
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              className="border-gray-500 text-gray-500"
            >
              Filter
            </Button>
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Reg #</th>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {firms.map((firm, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{firm.reg}</td>
                  <td className="py-2 px-4 border-b">{firm.name}</td>
                  <td className="py-2 px-4 border-b">{firm.email}</td>
                  <td className="py-2 px-4 border-b text-right">
                    <IconButton className="">
                      <Edit  className="bg-blue-400 rounded-full p-1"/>
                    </IconButton>
                    <IconButton className="">
                      <Delete  className="bg-blue-400 rounded-full p-1"/>
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button className="text-black border px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-200 flex items-center">
            <ArrowBack className="mr-2" /> Previous
          </button>
          <button onClick={checkboxPage} className="text-black border px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-200 flex items-center">
            Next <ArrowForward className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleAndPermissionList;
