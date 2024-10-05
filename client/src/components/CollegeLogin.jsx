import React, { useState } from 'react';

const CollegeLogin = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission logic here
        console.log('Form Data Submitted:', formData);
        
        // You can now send formData to your API or perform other actions
    };

    return (
        <>
            <div className="min-h-screen bg-blue-100 flex justify-center items-center pb-20 sm:px-0 px-5">
                <form 
                    onSubmit={handleSubmit} 
                    className="flex px-12 py-8 rounded-md sm:w-1/3 w-full bg-white items-start flex-col gap-4 text-white"
                >
                    <p className="text-4xl font-bold text-blue-600 mb-6">College Login</p>

                    {/* Username Field */}
                    <div className="w-full">
                        <label htmlFor="username" className="block text-blue-600 text-sm font-semibold mb-2">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="w-full">
                        <label htmlFor="password" className="block text-blue-600 text-sm font-semibold mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* College Login Button */}
                    <button 
                        type="submit"
                        className="bg-blue-200 text-sm font-semibold px-4 py-2 rounded-full text-blue-600 w-full"
                    >
                        College Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default CollegeLogin;
