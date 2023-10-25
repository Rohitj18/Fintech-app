import "./App.css";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPform from "./components/auth/OTPform";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Expense from "./pages/Expense";
import PrivateRoute from "./services/PrivateRoute";
import StockAnalysis from "./pages/StockAnalysis";
import Settings from "./pages/Settings";
import Sip from './components/SipCalculator/Sip'


function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/otp" element={<OTPform/>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/expense" element={<PrivateRoute><Expense/></PrivateRoute>}/>
        <Route path="/stock-analysis" element={<PrivateRoute><StockAnalysis/></PrivateRoute>}/>
        <Route path="/sip-calculator" element={<PrivateRoute><Sip/></PrivateRoute>}/>
        <Route path="/settings/:id" element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
