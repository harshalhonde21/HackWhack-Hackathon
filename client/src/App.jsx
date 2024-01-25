import { useEffect } from 'react'
import { Routes, Route } from "react-router"
import { About } from "./components/About/About"
import { NumIncrDecr } from "./components/Test/NumIncrDecr"
import { Login } from "./components/Auth/Login"
import { Home } from "./components/Home/Home"
import { Register } from "./components/Auth/Register"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'
import { IsLogin } from './actions/userActions'
import { Document } from './components/Document'



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

<Routes>    

{/* <Route path="*" element={<NotFound />} /> */}
{/* <Route exact path="/" element={<Home />} /> */}

<Route path="/about" element={<About />} />
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/document" element={<Document/>} />

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
