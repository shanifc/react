
// import './App.css'
// import Basic from './class-components/Bsic'
// import Calling_function from './embedding-expression/Calling_function'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/Welcome'

import Basic from "./functional-components/Basic";
import Props from "./functional-components/Props";
import State from "./functional-components/State";

function App() {

  return (
    <>
      {/* ------------Embedding-Expression------------- */}
      {/* <Welcome/> */}
      {/* <Calling_function/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/> */}

      {/* -------------functional components------------- */}
      {/* <Basic/> */}
      {/* <State/> */}
      <Props/>

    </>
  )
}
 export default App

// {/* ---------------class-components--------------- */}
// import React, { Component } from 'react'
// import Counter from './class-components/Counter'
// import UsingProps from './class-components/UsingProps'
// import Mounting from './class-components/life-cycle-methods/Mounting'
// import Updating from './class-components/life-cycle-methods/Updating'
// import Unmounting from './class-components/life-cycle-methods/Unmounting'
// import ButtonUnMount from './class-components/life-cycle-methods/ButtonUnmount'
// // import Basic from './class-components/Bsic'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Basic/> */}
//         {/* <UsingProps name="Shanif"/> */}
//         {/* <Counter/> */}
//         {/* <Mounting/> */}
//         {/* <Updating/> */}
//         {/* <Unmounting/> */}
//         {/* <ButtonUnMount/> */}
//       </div>
//     )
//   }
// }

