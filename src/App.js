import Navbar from "./Clients/Component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLogin from "./Clients/Pages/Login";
import ClientSignup from "./Clients/Pages/Signup";
import Employer from "./Employer/Component/Navbar";
import CIndex from "./Clients/index";
import EIndex from "./Employer/index"



function App() {
  return (<>
    <BrowserRouter>

      <CIndex />
      {/* <EIndex /> */}
    </BrowserRouter>

  </>
  );
}

export default App;
