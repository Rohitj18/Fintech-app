import "./App.css";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPform from "./components/auth/OTPform";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/otp" element={<OTPform/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
