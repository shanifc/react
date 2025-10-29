
// import './App.css'
// import Basic from './class-components/Bsic'
// import Calling_function from './embedding-expression/Calling_function'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/Welcome'

// function App() {

//   return (
//     <>
//     {/* ------------Embedding-Expression------------- */}
//       {/* <Welcome/> */}
//       {/* <Calling_function/> */}
//       {/* <Conditional/> */}
//       {/* <RenderingLists/> */}


//     {/* ---------------class-components--------------- */}
//     {/* <Basic/> */}
//     </>
//   )
// }

// export default App

{/* ---------------class-components--------------- */}
import React, { Component } from 'react'
import Counter from './class-components/Counter'
import UsingProps from './class-components/UsingProps'
// import Basic from './class-components/Bsic'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Basic/> */}
        {/* <UsingProps name="Shanif"/> */}
        <Counter/>
      </div>
    )
  }
}

