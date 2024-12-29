"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IconButton, Button, Menu, MenuItem } from '@mui/material';
import { Visibility, Search, FilterList } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { setFirms, setCurrentPage, setSelectedFirm } from '../redux/firmslice';
import Image from 'next/image';

const FirmList = () => {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const firmsState = useSelector((state) => state.firms);
  const dispatch = useDispatch();

  const { firms, totalPages, currentPage } = firmsState;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFirm, setSelectedFirmState] = useState(null);

  const handleApiRequest = async (page = 1) => {
    if (!token) {
      console.error("No token available. User might need to log in.");
      return;
    }

    try {
      const response = await axios.post(
        `https://accountingsaas.onrender.com/api/users/admin/company/${page}`, 
        {}, 
        { 
          headers: { 
            'x-auth-token': token 
          }
        }
      );
      dispatch(setFirms({
        firms: response.data.users,
        totalPages: response.data.count.totalPage,
        currentPage: page,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleApiRequest(currentPage);
  }, [token, currentPage]);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  const handleMenuClick = (event, firm) => {
    setAnchorEl(event.currentTarget);
    setSelectedFirmState(firm);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedFirmState(null);
  };

  const handleEdit = () => {
    dispatch(setSelectedFirm(selectedFirm));
    handleMenuClose();
    router.push("/companyFirm2");
  };

  return (
    <div className="pt-3">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl m-auto overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-2 md:mb-0">List Of Firms</h2>
          <div className="flex space-x-2">
            <Button variant="outlined" startIcon={<Search />} className="border-gray-500 text-gray-500">
              Search
            </Button>
            <Button variant="outlined" startIcon={<FilterList />} className="border-gray-500 text-gray-500">
              Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-3 border-b">Reg #</th>
                <th className="py-2 px-3 border-b">Logo</th>
                <th className="py-2 px-3 border-b">Firm Name</th>
                <th className="py-2 px-3 border-b">Phone</th>
                <th className="py-2 px-3 border-b">Email</th>
                <th className="py-2 px-3 border-b">Address</th>
                <th className="py-2 px-3 border-b">Type</th>
                <th className="py-2 px-3 border-b">Status</th>
                <th className="py-2 px-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {firms.length > 0 ? firms.map((firm, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 text-center border-b">{firm.registration}</td>
                  <td className="py-2 px-3 border-b text-center">
                    {firm.logo ? <Image src={firm.firm_logo} alt={`${firm.name} logo`} width={30} height={30} /> : "No Logo"}
                  </td>
                  <td className="py-2 px-3 border-b text-center">{firm.name}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.phone}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.email}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.address}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.type}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.status}</td>
                  <td className={`py-2 px-3 border-b text-center ${firm.status === 'online' ? 'text-blue-500' : 'text-red-500'}`}>{firm.status}</td>
                  <td className="py-2 px-3 text-center border-b">
                    <IconButton onClick={(event) => handleMenuClick(event, firm)}>
                      <Visibility />
                    </IconButton>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="10" className="py-2 px-3 text-center border-b">No firms available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={() => dispatch(setCurrentPage(currentPage - 1))} className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200" disabled={currentPage === 1}>
            Previous
          </button>
          <Pagination 
            count={totalPages} 
            page={currentPage} 
            onChange={handlePageChange} 
            variant="outlined" 
            color="primary"
          />
          <button onClick={() => dispatch(setCurrentPage(currentPage + 1))} className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200" disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
        <Menu 
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default FirmList;
