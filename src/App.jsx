import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus/Aboutus";
import Inquiry from "./Components/Inquiry/Inquiry";
import Contactus from "./Components/Contactus/Contactus";
import ChairmanDesk from "./Components/ChairmanDesk/ChairmanDesk";
import ChairmanTeam from "./Components/ChairmanTeam/ChairmanTeam";
import Syllabus from "./Components/Syllabus/Syllabus";
import Ncc from "./Components/Ncc/Ncc";
import Nss from "./Components/Nss/Nss";
import Sports from "./Components/Sports/Sports";
import Bca from "./Components/BCA/Bca";
import Bba from "./Components/BBA/Bba";
import PlacementPartner from "./Components/Placement/PlacementPartner";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <div className="mt-5">
        <Inquiry />
      </div>
      <Footer />
    </>
  );
}

export default App;
