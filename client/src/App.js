import React from 'react'
import { useRoutes } from './routes';
import { Navbar } from './components/Navbar';
import 'materialize-css'
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';



function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
        {routes}
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App