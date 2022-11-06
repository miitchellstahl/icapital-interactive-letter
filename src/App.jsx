import React from "react";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import Numbers from "./components/numbers/Numbers";
import Breakdown from "./components/breakdown/Breakdown";
import Aboutme from "./components/aboutme/Aboutme";
import Conclusion from "./components/conclusion/Conclusion";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <Mission />
      <Numbers />
      <Breakdown />
      <Aboutme />
      <Conclusion />
    </>
  );
};

export default App;
