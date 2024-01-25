import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../../actions/userActions";
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [fatherName, setFatherName] = useState();
  const [occupation, setOccupation] = useState();
  const [annualIncome, setAnnualIncome] = useState();
  const [motherName, setMotherName] = useState();
  const [occupationMother, setOccupationMother] = useState();
  const [annualIncomeMother, setAnnualIncomeMother] = useState();
  const [dob, setDob] = useState();
  const [state_of_origin, setState_of_origin] = useState();
  const [address, setAddress] = useState();
  const [uniqueId, setUniqueId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isLogin } = useSelector(state => state.user)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      number,
      dob,
      state_of_origin,
      address,
      fatherName,
      occupation,
      annualIncome,
      motherName,
      occupationMother,
      annualIncomeMother,
      uniqueId
    };

    dispatch(registerUser(data))

    // console.log(data)
  };



  useEffect(()=>{

    if(isLogin){
      navigate("/document")
    }

  },[isLogin])



  return (
    <>
      <div>
        <div className="py-12 px-6 bg-blue-100 h-screen flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-blue-600 mb-6">
            Register Details
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex flex-row gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="number"
                >
                  Phone Number:
                </label>
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="tel"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fatherName"
                >
                  Father Name:
                </label>
                <input
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fatherName"
                  type="text"
                  placeholder="Father Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="occupation"
                >
                  Occupation:
                </label>
                <input
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="occupation"
                  type="text"
                  placeholder="Enter occupation"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="annualIncome"
                >
                  Annual Income:
                </label>
                <input
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="annualIncome"
                  type="number"
                  placeholder="Enter annual income"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="motherName"
                >
                  Mother name:
                </label>
                <input
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="motherName"
                  type="text"
                  placeholder="Mother Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="occupationMother"
                >
                  Occupation of mother:
                </label>
                <input
                  value={occupationMother}
                  onChange={(e) => setOccupationMother(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="occupationMother"
                  type="text"
                  placeholder="Enter occupation"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="annualIncomeMother"
                >
                  Annual Income Mother:
                </label>
                <input
                  value={annualIncomeMother}
                  onChange={(e) => setAnnualIncomeMother(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="annualIncomeMother"
                  type="number"
                  placeholder="Enter annual income"
                />
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dob"
                >
                  Date of Birth:
                </label>
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dob"
                  type="date"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="state_of_origin"
                >
                  State of origin:
                </label>
                <input
                  value={state_of_origin}
                  onChange={(e) => setState_of_origin(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state_of_origin"
                  type="text"
                  placeholder="Your State of Origin"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address:
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Your address"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="uniqueId"
                >
                  Unique Id:
                </label>
                <input
                  value={uniqueId}
                  onChange={(e) => setUniqueId(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uniqueId"
                  type="text"
                  placeholder="Enter Unique Id "
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="uniqueId"
                >
                  Create Password:
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Create new password "
                />
              </div>
            </div>

            <div className="flex items-center w-full justify-center">
              <button
                className="bg-blue-500 w-1/3 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

/*

           

*/
