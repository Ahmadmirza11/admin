"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImageUploading from 'react-images-uploading';
import { MdOutlineCloudUpload } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure to import CSS for notifications
import { ThreeDots } from 'react-loader-spinner';

const AddFirm = () => {
    // Access the selected firm and token from the Redux store
    const selectedFirm = useSelector((state) => state.firms.selectedFirm);
    const token = useSelector((state) => state.auth.token);
    
    // State for images, admin images, form data, and loading status
    const [images, setImages] = useState([]);
    const [adminImages, setAdminImages] = useState([]);
    const [formData, setFormData] = useState({
        email: selectedFirm?.email || '',
        address: selectedFirm?.address || '',
        name: selectedFirm?.name || '',
        phone: selectedFirm?.phone || '',
        registration: selectedFirm?.registration || '',
        firstName: '',
        lastName: '',
        adminEmail: '',
        adminPassword: ''
    });
    const [loading, setLoading] = useState(false); // Loading state for the submit button

    // Handle image upload for firm logo
    const onChange = (imageList) => {
        setImages(imageList);
    };

    // Handle image upload for admin profile picture
    const onAdminChange = (imageList) => {
        setAdminImages(imageList);
    };

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true); // Set loading to true when starting the request

        // Prepare data to send to the API
        const dataToSend = {
            name: formData.name,
            registration: formData.registration,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            adminfname: formData.firstName,
            adminlname: formData.lastName,
            adminemail: formData.adminEmail,
            password: formData.adminPassword,
        };

        try {
            // Send PUT request to update the firm
            const response = await axios.put(`https://accountingsaas.onrender.com/api/users/admin/edit-firm/${selectedFirm._id}`, dataToSend, {
                headers: { 
                    'x-auth-token': token,
                    'Content-Type': 'application/json', // Set content type to JSON
                }
            });
            console.log("Response:", response.data);
            toast.success("Successfully updated the firm!"); // Show success notification

            // Clear the form fields after successful submission
            setFormData({
                email: '',
                address: '',
                name: '',
                phone: '',
                registration: '',
                firstName: '',
                lastName: '',
                adminEmail: '',
                adminPassword: ''
            });
            setImages([]); // Clear firm logo images
            setAdminImages([]); // Clear admin profile images

        } catch (error) {
            // Handle errors during the API call
            if (error.response) {
                console.error("Error response:", error.response.data);
                toast.error("Error: " + error.response.data.message || "Something went wrong.");
            } else {
                console.error("Error:", error.message);
                toast.error("Error: " + error.message);
            }
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return (
        <div>
            <div className='bg-white shadow-xl rounded-lg p-4'>
                <p className='text-3xl font-bold'>Add Firm</p>
                <div className='flex justify-start'>
                    <div className='mt-5 flex-1'>
                        <div className='flex flex-row space-x-8 items-center'>
                            <p>Logo of Firm</p>
                            <ImageUploading
                                multiple={false}
                                value={images}
                                onChange={onChange}
                                maxNumber={1}
                                dataURLKey="data_url"
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                                    <div className='border-dashed rounded-md p-1 border-2 py-6 flex flex-col items-center'>
                                        {imageList.length === 0 ? (
                                            <div
                                                className='cursor-pointer text-gray-500 text-center'
                                                onClick={onImageUpload}
                                            >
                                                <MdOutlineCloudUpload className="h-5 w-5 mx-auto mb-2" />
                                                <p>Click to upload or drag and drop</p>
                                                <p>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={imageList[0].data_url}
                                                    alt="Firm Logo"
                                                    className="w-32 h-32 object-contain rounded-md"
                                                />
                                                <button
                                                    onClick={onImageRemoveAll}
                                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                        {/* Email */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Email of Firm</label>
                            <input
                                name="email"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Address */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Address</label>
                            <input
                                name="address"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* Right side fields */}
                    <div className='flex-1 ml-9'>
                        {/* Name */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Name of Firm</label>
                            <input
                                name="name"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Phone Number */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Firm Phone Number</label>
                            <input
                                name="phone"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Registration Number */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Firm Registration #</label>
                            <input
                                name="registration"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.registration}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Second container */}
            <div className='bg-white shadow-xl rounded-lg p-4 mt-10'>
                <p className='text-3xl font-bold'>Add Admin</p>
                {/* Profile Pic */}
                <div className='flex justify-start'>
                    <div className='flex-1'>
                        <div className='flex flex-row space-x-8 items-center'>
                            <p>Profile Pic</p>
                            <ImageUploading
                                multiple={false}
                                value={adminImages}
                                onChange={onAdminChange}
                                maxNumber={1}
                                dataURLKey="data_url"
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                                    <div className='border-dashed rounded-md p-1 border-2 py-6 flex flex-col items-center mt-6'>
                                        {imageList.length === 0 ? (
                                            <div
                                                className='cursor-pointer text-gray-500 text-center'
                                                onClick={onImageUpload}
                                            >
                                                <MdOutlineCloudUpload className="h-5 w-5 mx-auto mb-2" />
                                                <p>Click to upload or drag and drop</p>
                                                <p>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={imageList[0].data_url}
                                                    alt="Admin Profile"
                                                    className="w-32 h-32 object-contain rounded-md"
                                                />
                                                <button
                                                    onClick={onImageRemoveAll}
                                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                        {/* First Name */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>First Name</label>
                            <input
                                name="firstName"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Last Name */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Last Name</label>
                            <input
                                name="lastName"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* Admin Email */}
                    <div className='flex-1 ml-7'>
                        <div className='mt-4'>
                            <label className='mb-2 block'>Email</label>
                            <input
                                type='email'
                                name="adminEmail"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.adminEmail}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Admin Password */}
                        <div className='mt-4'>
                            <label className='mb-2 block'>Password</label>
                            <input
                                type='password'
                                name="adminPassword"
                                placeholder='Enter here'
                                className='border p-2 border-black w-full rounded-md'
                                value={formData.adminPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-end mt-8'>
                <button 
                    className={`text-white bg-blue-500 rounded-md p-2 w-96 flex justify-center items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    onClick={handleSubmit} 
                    disabled={loading} // Disable button while loading
                >
                    {loading ? <ThreeDots height="20" width="20" color="#ffffff" /> : "Submit"}
                </button>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default AddFirm;
