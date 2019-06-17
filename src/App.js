import React from "react";
import "./App.css";
import DragonBoatFestival from "./component/DragonBoatFestival";
import Explosion from "./component/Explosion";
import Form from "./component/Form";

const App = () => {
  return (
    <>
      <Form />
      <Explosion />
      <DragonBoatFestival />
    </>
  );
};

export default App;
