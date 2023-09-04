import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import './Navbar.css'


class Navbar extends Component{

    render(){

        return(
            <>

                <nav className='navitem'>
                  <h1 className='navbar-logo'>React<i class='bx bxl-react'></i></h1>

                    <ul className='nav-link'>

                        {MenuItems.map((item,index) =>{

                            return(
                                <li key={index}>
                                    <a className={item.classname} href={item.url}>{item.content}</a>
                                </li>
                            )

                        })}

                    </ul>

                </nav>

            </>
        );
    }
}

export default Navbar