import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import Student from "./Student_class_com";
import Functcomponent from "./Functcomponent";
import Classcomp from "./Classcomp";

function App() {
  return (
    <>
      <Heading />
      <Para />
      <List />
      <Student city="Surat" />
      <Functcomponent text="Functional Component" />
      <Classcomp />
    </>
  );
}

export default App;
