import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () =>{
    return (
        <nav>
            <div className="nav-wrapper blue lighten-1" style = {{padding: '0 2rem'}}>
                <span href="/" className="brand-logo">Придумать название</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to ="/main" >Главная</NavLink></li>
                    <li><NavLink to ="/ref" >Теория</NavLink></li>
                    <li><NavLink to ="/example" >Примеры</NavLink></li>
                    <li><NavLink to ="/training" >Практика</NavLink></li>
                    <li><NavLink to ="/account" >Личный кабинет</NavLink></li>
                    <li><a>Выход</a></li>
                </ul>
            </div>
        </nav>        
    )
}

