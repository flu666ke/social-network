import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://st2.depositphotos.com/1144386/7770/v/950/depositphotos_77704930-stock-illustration-original-square-windows-8-style.jpg" />

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;