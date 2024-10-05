import React from 'react'

const KnowYourStatus = () => {
  return (
    <>


            <div className="min-h-screen bg-blue-100 flex justify-center items-center pb-20 sm:px-0 px-5">


                <div className="flex px-12 py-8 rounded-md sm:w-1/3 w-full bg-blue-800 items-start flex-col gap-4 text-white">
                
                    <p className="font-semibold text-3xl">Know Your Status</p>
                    <p>Please enter your application no. to check your application status</p>

                    <input type="text" placeholder="Unique id no" className="w-full outline-none text-white border border-white rounded-sm px-3 py-2 bg-blue-800" />

                    <button className="bg-blue-200 text-sm font-semibold px-4 py-2 rounded-full text-blue-600">Get Status</button>


                </div>

            </div>
    
    
    </>
  )
}

export default KnowYourStatus