import { useEffect } from 'react'
import { Routes, Route } from "react-router"
import { About } from "./components/About/About"
import { Login } from "./components/Auth/Login"
import { Home } from "./components/Home/Home"
import { Register } from "./components/Auth/Register"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { IsLogin } from './actions/userActions'
import { Document } from './components/Document'
import  CollegeLogin from './components/CollegeLogin'
import { Navbar } from './components/Navbar'
import KnowYourStatus from './components/KnowYourStatus'



function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    const LogOrNot = () => {
      dispatch(IsLogin());
    }
    LogOrNot()
  }, []);


  return (
    <>


    <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-register" element={<Register />} />
        <Route path="/college-login" element={<CollegeLogin />} />
        <Route path="/document" element={<Document />} />
        <Route path="/know-your-status" element={<KnowYourStatus />} />
      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "

      />

    </>
  )
}

export default App
