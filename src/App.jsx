
// import './App.css'
// import Basic from './class-components/Bsic'
// import Calling_function from './embedding-expression/Calling_function'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/Welcome'

import { UserApiProvider } from "./functional-components/hooks/useContext-Hook/dark&lightMode/user-list/UserApiContext"
import UserList from "./functional-components/hooks/useContext-Hook/dark&lightMode/user-list/UserList"

// import Home from "./functional-components/hooks/useContext-Hook/dark&lightMode/Home"
// import { ThemeProvider } from "./functional-components/hooks/useContext-Hook/dark&lightMode/ThemeContext"

// import Basic from "./functional-components/Basic";
// import RunEffect from "./functional-components/hooks/useEffect-Hook/RunEffect";
// import RunEffectSpecifiv from "./functional-components/hooks/useEffect-Hook/RunEffectSpecifiv";
// import Timer from "./functional-components/hooks/useEffect-Hook/Timer";
// import UserList from "./functional-components/hooks/useEffect-Hook/UserList";
// import NameForm from "./functional-components/hooks/useState/NameForm";
// import ProfileForm from "./functional-components/hooks/useState/ProfileForm";
// import ToggleButton from "./functional-components/hooks/useState/ToggleButton";
// import Props from "./functional-components/Props";
// import State from "./functional-components/State";
// import Parent from "./work/Parent";

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
      {/* <Props/> */}
      {/* ------------hooks & life cycle methods---------- */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <Parent /> */}
      {/* <NameForm/> */}
      {/* <ToggleButton/> */}
      {/* <ProfileForm/> */}
      {/* <RunEffect/> */}
      {/* <RunEffectSpecifiv/> */}

      {/* ------------useContext hook----------- */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}
      <UserApiProvider>
        <UserList/>
      </UserApiProvider>

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

