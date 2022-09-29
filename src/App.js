import Login from "./pages/Login";
import InitialPage from "./pages/InitialPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from 'react-redux'

import { ToastContainer } from "react-toastify";

import './App.css'

const App = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/first' element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
