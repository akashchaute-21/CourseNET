import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "../src/components/core/Auth/OpenRoute";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route
          path="signup"
          element={
            // <OpenRoute>
              <Signup />
            // </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            // OpenRoute is  for nonlogin users
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
    <Route
          path="forgot-password"
          element={
            // OpenRoute is  for nonlogin users
            <OpenRoute>
              <ForgetPassword/>
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  
    <Route
          path="update-password/:id"
          element={
            // OpenRoute is  for nonlogin users
            <OpenRoute>
              <UpdatePassword/>
            </OpenRoute>
          }
        />
    </Routes>
    </div>
  );
}

export default App;
