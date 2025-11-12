
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import "./Components/Style.css"
// import './App.css'
// import Basic from './class-components/Bsic'
// import Calling_function from './embedding-expression/Calling_function'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/Welcome'


import Crud from "./local-storage/Crud";


// import Form from "./form/Form";

// import SimpleForm from "./form/SimpleForm";

// import Items from "./react-keys/Items";
// import RealWorld from "./react-keys/RealWorld";

// import Navbar from "./nested-routing/Navbar"
// import Home from './nested-routing/pages/Home'
// import About from './nested-routing/pages/About'
// import Services from './nested-routing/pages/services/Services'
// import WebDev from './nested-routing/pages/services/WebDev'
// import AppDev from './nested-routing/pages/services/AppDev'
// import Design from './nested-routing/pages/services/Design'

// import { Route, Router, Routes } from "react-router-dom"
// import Navbar from "./Components/Navbar"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"


// import { Route, Routes } from "react-router-dom"
// import Products from "./dynamic-routing/Products"
// import ProductDetailPage from "./dynamic-routing/ProductDetailPage"

// import { Link, Route, Routes } from "react-router-dom"
// import Home from "./react-router-dom/Home"
// import About from "./react-router-dom/About"

// import { TodoContext } from "./functional-components/hooks/work/TodoContext"
// import TodoList from "./functional-components/hooks/work/TodoList"

// import { UserApiProvider } from "./functional-components/hooks/useContext-Hook/dark&lightMode/user-list/UserApiContext"
// import UserList from "./functional-components/hooks/useContext-Hook/dark&lightMode/user-list/UserList"

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
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}
      {/* <TodoContext/> */}
      {/* <TodoList/> */}

      {/* ---------------react - router - dom ----------- */}
      {/* ------1. ------basic routing ------------ */}

      {/* <div>
        <nav>
          <Link to='/'>Home</Link> <br />
          <Link to='/about'>About</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      {/* ---------2.----------dynamic routing--------- */}
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes> */}

      {/* -----------3.---------nested routing---------- */}
      {/* <Navbar />
      <div className="container-app "></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> */}

      {/* nested routing starts here */}
      {/* <Route path='/services' element={<Services />} />
        <Route path='web-development' element={<WebDev />} />
        <Route path='app-development' element={<AppDev />} />
        <Route path='design' element={<Design />} />

      </Routes> */}


      {/* -------------my- website------- */}
      {/* <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

      {/* ----------react keys------------ */}
      {/* <Items/> */}

      {/* ---------real-world------- */}
      {/* <RealWorld/> */}

      {/* -----------form validation---------- */}
        {/* <SimpleForm/> */}
        {/* <Form/> */}

        {/* --------local-storage--------- */}
        <Crud/>
        


    </>
  )
}
export default App;

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

