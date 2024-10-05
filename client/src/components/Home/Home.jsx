import React from "react";
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className="py-12 px-6 bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <div className="pb-8 pt-12">
          <div className="text-4xl sm:text-5xl lg:text-6xl pb-3 font-bold text-blue-600 text-center mb-6">
            Welcome to UniScholar - Bridging Opportunities Beyond Borders
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-medium px-2 text-center mb-6">
            Scholarship application portal for students of other states in
            Maharashtra
          </div>
        </div>
        <div className="text-base sm:text-lg lg:text-xl text-center px-3 sm:px-5 lg:px-10">
          Unlock your potential and seize the opportunity for higher education
          in Maharashtra with UniScholar! We understand the challenges that
          students from other states may face in pursuing their dreams. That's
          why we're here to connect you with exclusive scholarships tailored for
          out-of-state students in Maharashtra.
        </div>
        <div className="text-base sm:text-lg lg:text-xl text-center pt-6 pb-4 px-3 sm:px-5 lg:px-10">
          At UniScholar, we believe that every student deserves the chance to
          thrive in Maharashtra's educational landscape. Start your journey with
          us and explore the diverse range of scholarships waiting for you.
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-center pt-6">
          <strong>
            Apply now and step into a world of opportunities with UniScholar!
          </strong>
        </p>

        <div className="mb-12 flex justify-center pt-6 items-center w-full">
          <Link
            to="/register"
            className="bg-blue-700 hover:bg-blue-600 text-center py-3 font-mono px-8 sm:px-10 lg:px-12 w-2/3 sm:w-1/3 lg:w-1/4 text-lg sm:text-xl text-white"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
};
