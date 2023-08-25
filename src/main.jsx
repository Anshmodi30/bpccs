import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Components/Homepage/Home";
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

const router = createBrowserRouter([
  {
    path: "/bpccs/",
    element: <App />,
    children: [
      {
        path: "/bpccs/",
        element: <Home />,
      },
      {
        path: "/bpccs/aboutSVKM",
        element: <Aboutus />,
      },
      {
        path: "/bpccs/contactus",
        element: <Contactus />,
      },
      {
        path: "/bpccs/desk",
        element: <ChairmanDesk />,
      },
      {
        path: "/bpccs/faculties",
        element: <ChairmanTeam />,
      },
      {
        path: "/bpccs/syllabus",
        element: <Syllabus />,
      },
      {
        path: "/bpccs/ncc",
        element: <Ncc />,
      },
      {
        path: "/bpccs/nss",
        element: <Nss />,
      },
      {
        path: "/bpccs/sports",
        element: <Sports />,
      },
      {
        path: "/bpccs/bca",
        element: <Bca />,
      },
      {
        path: "/bpccs/bba",
        element: <Bba />,
      },
      {
        path: "/bpccs/placementpartner",
        element: <PlacementPartner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
