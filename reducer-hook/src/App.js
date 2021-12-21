import React, { useReducer } from "react";
import CounterOne from "./CounterOne";
import './App.css';
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import ComponentA from "./ComponentA";
import ComponentC from "./ComponentC";
import ComponentB from "./ComponentB";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";


export const CountContext = React.createContext();

/*
const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};*/

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
        </div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <CounterThree /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
    </div>
  );
}

export default App;
