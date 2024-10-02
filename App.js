import logo from './logo.svg';
import './App.css';
import  Header from  './components/header/Header'
// import { Link } from '@chakra-ui/react';
import Menu from './components/menu/Menu';
import {ChakraProvider} from '@chakra-ui/react';
import Feature from './components/feature/Feature';
import { BrowserRouter, Route, Routes ,Navigate,Outlet} from 'react-router-dom';
// import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Omor from './components/feature/Omor';
// import Menu_item1 from './components/menu/Menu_item1';
// import Layout from './components/Layout';

const PrivateRoutes =() =>{
  let auth = {'token':true} //change this to  reflect an auth session
  
  return(
    auth.token ? <Outlet/> : <Navigate to="/login"/>
  )

  
}


function App() {
  return (
  
  <>
  <ChakraProvider>
    <BrowserRouter>
    <Header></Header>
    <Feature></Feature>
    <Menu></Menu>
    <Routes>
      <Route  path="/login" element={<Login/>}/>
      <Route path="/omor" element={<Omor/>}/>
      <Route             element={<PrivateRoutes/>}/>
      <Route path="/"  element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </ChakraProvider>

</>

);
}

export default App;









{/* <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'300px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <Header/>
    <Feature/>
    <Menu/>
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
  <Routes>

<Route path='/' element={<Header/>}/>
<Route index  element={<Home/>}   />
<Route path='login' element={<Login/>} />
<Route path='menu_item1' element={<Menu_item1/>} />

</Routes>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>













    </>


//  */}






