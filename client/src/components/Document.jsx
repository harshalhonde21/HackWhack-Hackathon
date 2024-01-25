import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Document = () => {
  const [certificateName, setCertificateName] = useState();
  const [fileUpload, setFileUpload] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      certificateName,
      fileUpload,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/file/uploadFile",
        data
      );

      // console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      // Handle errors
      console.error("Error submitting data:", error);
    }
  };

  const documentFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setFileUpload(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className="mt-8 pl-12">
        <div className="text-2xl font-semibold mb-4 ">
          Upload your Centralized Scholarship Certificate Document
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit} className="pt-12" action="">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="certificateName"
              >
                Certificate Name:
              </label>
              <input
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Certificate Name"
                required
              />
            </div>

            <input
              className="border p-2"
              onChange={documentFileChange}
              type="file"
              id="doc"
              name="doc"
              accept="application/pdf"
              required
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
