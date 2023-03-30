import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Global } from "@emotion/react";
import { reset } from './styles/Global/reset';
import Todo from './pages/Todo/Todo'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Aside from './components/Aside/MainAside/MainAside'
import Home from './pages/Home/Home';
import { css } from "@emotion/react";
import { useState } from 'react';
import Container from './pages/Container/Container';

function App() {

  const [showAside, setShowAside] = useState(true);

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  return (
    <>
    <Global styles ={reset}/>
    <Container/>
   </>
  );
}

export default App;
