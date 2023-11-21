import { AppBar, Container, Toolbar } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

import About from './components/About';
import Mission from './components/Mission';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductsDetails from './components/ProductsDetails';

import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import {ROUTES, SECTIONS} from './constants';

import './App.css';



const App = () => {

  const navigate = useNavigate();
  

  return (
    <div className="App">
      <AppBar position="static">
       <Container maxWidth="xl">
         <Toolbar disableGutters className='toolbar'>
          <div className='name-wrapper'>
            <TerminalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <p>Landing page</p>
          </div>
            <div className='section-wrepper'>
            {SECTIONS.map((section) => {
              return ( 
              <div key={section.name} 
                   onClick={() => navigate(section.route)}
                   className='section'>
                  {section.name}
              </div>
            )})}
            </div>
          </Toolbar>
       </Container>
      </AppBar>
      <div className='App-header'>
          <Routes>
              <Route path={ROUTES.ABOUT} element={<About/>}/>
              <Route path={ROUTES.MISSION} element={<Mission/>}/>
              <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
              <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductsDetails/>}/>
              <Route path={ROUTES.CONTACT} element={<Contact/>}/>
              {/*<Route path="*" element={<h1>404 Not Found</h1>}/>*/}
              <Route path="*" element={<Navigate to="/about"/>}/> 
          </Routes> 
      </div>
    </div>
  );
}

export default App;
