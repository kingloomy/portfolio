import { useState } from 'react';

function Header(){
    const [menuActive, setMenuActive] = useState(false);
        return (
        <>
            <header className="header">
                <a href="#" className="header__logo"></a>
                <input id="menu-sentinel" type="checkbox" defaultChecked={menuActive} onClick={() => setMenuActive(!menuActive)}/>
                <label htmlFor='menu-sentinel' className='header__toggler'></label>
            </header>
        </>
    );

    function Navigation(){
        return(
             <nav className='nav'>
                <a className='nav__row'>
                    Projects
                </a>
                <a className='nav__row'>
                    Design
                </a>
                <a className='nav__row'>
                    Lab
                </a>
                <a className='nav__row'>
                    Contact
                </a>
            </nav> 
        )
    }
}

export default Header;