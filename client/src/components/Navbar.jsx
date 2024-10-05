import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const { isLogin } = useSelector(state => state.user)


  



  return (
    <>

        <div> 


          <ul className="flex items-center justify-between gap-8 py-4 px-12">

            <Link className="text-blue-600 text-xl font-bold">UniScholar</Link>


            <div className="flex items-center justify-end gap-12">
            <Link to="/" className="font-semibold ">Home</Link>


            <Link to="/student-register" className="font-semibold ">Student Register</Link>
            <Link to="/college-login" className="font-semibold ">College Login</Link>

            {
              isLogin ? 
              <Link to="/document" className="font-semibold ">Upload Document</Link>
              : null
            }

            </div>
          </ul>
            
        </div>
    
    </>
  )
}
