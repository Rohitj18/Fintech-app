import "./App.css";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
