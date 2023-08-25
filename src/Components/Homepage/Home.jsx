import React from "react";
import Choosecard from "./Choosecard";
import StudentReviiews from "./StudentReviiews";
import Campuslife from "./Campuslife";
import Hero from "./Hero";
import Announcement from "./Announcement";
import Placement from "./Placement";

const Home = () => {
  return (
    <div>
      <Hero />
      <Announcement />
      <Choosecard />
      <Campuslife />
      <StudentReviiews />
      <Placement />
    </div>
  );
};

export default Home;
