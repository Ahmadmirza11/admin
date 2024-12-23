"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Enter your name"),
  amount: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  tags: Yup.string().required("Tagline is required"),
  features: Yup.array()
    .of(Yup.string().required("Feature is required"))
    .required("At least one feature is required"),
});

const CreatePackage = ({onPackageCreated}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);


  const handleSubmit = async (values) => {
    if (!token) {
      toast.error("No authentication token found. Please log in.");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://accountingsaas.onrender.com/api/package/create",
        values,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      toast.success("Package created successfully!");
      onPackageCreated()
    } catch (error) {
      console.error(
        "Error creating package:",
        error.response ? error.response.data : error.message
      );
      toast.error("Error creating package. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-7">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-extrabold">Create Package</p>
        <Formik
          initialValues={{ name: "", amount: "", tags: "", features: [""] }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            touched,
            setFieldValue,
          }) => (
            <form className="mt-8 flex justify-between" onSubmit={handleSubmit}>
              <div className="w-1/2 pr-4">
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">Name</label>
                  <input
                    name="name"
                    className="border border-black rounded-lg w-full p-2"
                    placeholder="Payroll Tax Management"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">Price</label>
                  <input
                    name="amount"
                    className="border border-black rounded-lg w-full p-2"
                    placeholder="Enter price"
                    type="number"
                    value={values.amount}
                    onChange={handleChange}
                  />
                  {errors.amount && touched.amount && (
                    <div className="text-red-500">{errors.amount}</div>
                  )}
                </div>
              </div>

              <div className="w-1/2 pl-4">
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">
                    Tag Line
                  </label>
                  <input
                    name="tags"
                    className="border border-black rounded-lg w-full p-2"
                    placeholder="Tagline for the package"
                    type="text"
                    value={values.tags}
                    onChange={handleChange}
                  />
                  {errors.tags && touched.tags && (
                    <div className="text-red-500">{errors.tags}</div>
                  )}
                </div>
                {/* features */}
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">
                    Features
                  </label>
                  {values.features.map((feature, index) => (
                    <div
                      className="flex items-center relative mb-2"
                      key={index}
                    >
                      <input
                        name={`features[${index}]`}
                        className="border border-black rounded-lg w-full p-2 pr-12"
                        placeholder="Feature"
                        type="text"
                        value={feature}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFieldValue("features", [...values.features, ""]);
                        }}
                        className="absolute right-2 text-blue-500 w-12 h-12 flex items-center justify-center"
                      >
                        <TiPlus size={24} />
                      </button>
                    </div>
                  ))}
                  {errors.features && touched.features && (
                    <div className="text-red-500">{errors.features}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-10 py-3 mt-4 w-full flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <ThreeDots
                      width="20"
                      height="20"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      color="#fff"
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePackage;
