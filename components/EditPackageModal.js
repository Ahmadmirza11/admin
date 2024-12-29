"use client";
import React, { useEffect, useState } from 'react';

const EditPackageModal = ({ isOpen, onClose, onSave, packageData }) => {
  const [formData, setFormData] = useState(packageData);

  useEffect(() => {
    setFormData(packageData);
  }, [packageData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (e, index) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newFeatures = [...prev.features];
      newFeatures[index] = value;
      return { ...prev, features: newFeatures };
    });
  };

  const addFeature = () => {
    setFormData((prev) => ({ ...prev, features: [...prev.features, ''] }));
  };

  const removeFeature = (index) => {
    setFormData((prev) => {
      const newFeatures = [...prev.features];
      newFeatures.splice(index, 1);
      return { ...prev, features: newFeatures };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left mb-1">Name</label>
            <input
              name="name"
              value={formData?.name || ''}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1">Amount</label>
            <input
              name="amount"
              value={formData?.amount || ''}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1">Tags</label>
            <input
              name="tags"
              value={formData?.tags || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1">Features</label>
            {formData?.features?.map((feature, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  value={feature}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="border border-gray-300 rounded-md w-full p-2"
                />
                <button type="button" onClick={() => removeFeature(index)} className="ml-2 text-red-500">
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={addFeature} className="mt-2 text-blue-500">
              Add Feature
            </button>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2 w-full">Save</button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-600">Close</button>
      </div>
    </div>
  );
};

export default EditPackageModal;
