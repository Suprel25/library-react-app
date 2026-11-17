import React from "react";
import Landing from '../components/Landing'
import HighLights from "../components/Highlights";
import Featured from "../components/Featured";
import Disocounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <HighLights />
      <Featured />
      <Disocounted />
      <Explore />
    </>
  );
};

export default Home;
