import React, { createContext } from 'react'
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import Student from "./Student_class_com";
import Functcomponent from "./Functcomponent";
import Classcomp from "./Classcomp";
import Stopwatchfun from './Stopwatchfun';
import Gettime from "./Gettime";
import UseEffectex from "./UseEffectex";
import CompoA from "./CompoA";
import CompA from './useContext/CompA';
import UseReducer from './UseReducer';
import CallbackHook from './useCallback/CallbackHook';
import Memo from './useCallback/Memo';
import UseRef from './useCallback/UseRef';

const FirstName = createContext()
const LastName = createContext()
const App = () => {
  return (
    <div>
      <Heading />
      <Para />
      <List />
      <Student city="Surat" />
      <Functcomponent text="Functional Component" />
      <Classcomp />
      <Stopwatchfun />
      <Gettime />
      <UseEffectex />
      <FirstName.Provider value={'Maya'}>
        <LastName.Provider value={'Patel'}>
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>
      <CompA />
      <UseReducer />
      <CallbackHook />
      <Memo />
      <UseRef />
    </div>
  )
}

export default App
export { FirstName, LastName }

