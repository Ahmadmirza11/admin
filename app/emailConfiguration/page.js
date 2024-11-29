import React from "react";

const EmailConfiguration = () => {
  return (
    <div>
      <div className="bg-white rounded-xl p-5 shadow-2xl">
        <h1 className="text-2xl font-bold">Email Configuration</h1>
        {/* inputs */}
        <form className="flex items-start justify-between mt-10">
          <div className="flex-1 pr-8">
            {/* select tag */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Mailer</label>
              <select className="border rounded-md p-3 w-full">
                <option className="text-gray-500">Enter Here</option>
              </select>
            </div>
            {/* port */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Port</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
            {/* password */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Password</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
            {/* Send from */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Send From</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
          </div>
          {/* div2 */}
          <div className="flex-1">
            {/* host */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Host</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
            {/* email */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Email</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
            {/* encryption */}
            <div className="mb-4">
              <label className="font-semibold mb-1 block">Encryption</label>
              <input
                className="border rounded-md p-3 w-full"
                placeholder="Enter Here"
              />
            </div>
            {/* button */}
            <div className="mt-32">
              <button className="bg-blue-400 text-white font-bold w-full rounded-md py-3">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* section 2 */}
      <div className="bg-white rounded-xl p-5 shadow-2xl mt-10">
        {" "}
        <p className="text-2xl font-bold">
          Email Configuration Verification
        </p>{" "}
        <p className="text-red-600 pt-3 text-[13px]">
          Note: An email will be sent to test if your email settings are
          correct.
        </p>{" "}
        <div className="mt-3">
          {" "}
          <p className="text-gray-500">
            1. Enter the email address in the input box.
          </p>{" "}
          <p className="text-gray-500">2. Click on verify.</p>{" "}
          <p className="text-gray-500">
            3. Check your inbox. If you receive a test email, your email
            configuration is correct.
          </p>{" "}
          {/* email */}{" "}
          <div className="mb-4 mt-5">
            {" "}
            <label className="font-semibold mb-1 block">Email</label>{" "}
            <input
              className="border rounded-md p-3 w-full max-w-xl"
              placeholder="Enter Here"
            />{" "}
          </div>{" "}
          {/* button */}{" "}
          <div className="mt-3">
            {" "}
            <button className="bg-blue-400 text-white font-bold w-full max-w-xl rounded-md py-3">
              Verify
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default EmailConfiguration;
