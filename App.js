
import './App.css';
import { ChakraProvider, Container,Box } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import Header from './components/header/Header';
import MainData from './components/main/MainData';
import Headerdata from './components/headerdata/Headerdata';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })
function App() {
  return (
    <ChakraProvider  theme={theme}>

<div className="main">
<div className="container"> 

   <Header/>
 {/* <Headerdata/> */}
 <MainData/>

 </div>
  </div>
  </ChakraProvider>
   
  );
}

export default App;
