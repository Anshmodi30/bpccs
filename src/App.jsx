import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus/Aboutus";
import Inquiry from "./Components/Inquiry/Inquiry";
import Contactus from "./Components/Contactus/Contactus";
import ChairmanDesk from "./Components/ChairmanDesk/ChairmanDesk";
import ChairmanTeam from "./Components/ChairmanTeam/ChairmanTeam";
import Syllabus from "./Components/Syllabus/Syllabus";
import Noticeboard from "./Components/Notice/Noticeboard";
import Ncc from "./Components/Ncc/Ncc";
import Nss from "./Components/Nss/Nss";
import Sports from "./Components/Sports/Sports";
import Bca from "./Components/BCA/Bca";
import Bba from "./Components/BBA/Bba";
import PlacementPartner from "./Components/Placement/PlacementPartner";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutSVKM" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/desk" element={<ChairmanDesk />} />
          <Route path="/faculties" element={<ChairmanTeam />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/ncc" element={<Ncc />} />
          <Route path="/nss" element={<Nss />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/bca" element={<Bca />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="/placementpartner" element={<PlacementPartner />} />
        </Routes>
        <div className="mt-5">
          <Inquiry />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
