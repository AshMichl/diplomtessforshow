import React from 'react'
//import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/TrainingPage'
import { DetailPage } from './pages/ReferencePage'
import { LinksPage } from './pages/ExamplePage'
import { AccountPage } from './pages/AccountPage';
import { RegistrPage } from './pages/RegisterPage';
import { MainPage } from './pages/MainPage';



export const useRoutes = () => {
    
        return(
           
            <Routes>
                <Route path = "/example" element={<LinksPage />}></Route>
                <Route path = "/training" element={<CreatePage/>} ></Route>
                <Route path = "/ref" element={<DetailPage/>} ></Route>
                <Route path = "/account" element={<AccountPage/>} ></Route>
                <Route path = "/reg" element={<RegistrPage/>} ></Route>
                <Route path = "/main" element={<MainPage/>} ></Route>
                <Route path = "/auth" element={<AuthPage/>} ></Route>
                <Route path = "/" element={<MainPage/>} ></Route>
            </Routes>
            
        )
    
}

export const useRoutesRef = () => {
    return(
        <div>
                <ul>
                    <li><NavLink to ="/" >Phishing</NavLink></li>
                    <li><NavLink to ="/" >Scareware </NavLink></li>
                    <li><NavLink to ="/" >Baiting</NavLink></li>
                    <li><NavLink to ="/" >Water-Holing</NavLink></li>
                    <li><NavLink to ="/" >Pretexting attack</NavLink></li>
                    <li><NavLink to ="/" >Quid pro quo</NavLink></li>
                    <li><NavLink to ="/" >Honey Pot</NavLink></li>
                    <li><NavLink to ="/" >Tailgating</NavLink></li>
                </ul>
        </div>   
        
    )
}