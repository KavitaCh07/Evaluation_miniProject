import React from 'react';
import './sideMenu.css';
import burger_menu from '../../assets/images/burger_menu.png';
import home_icn from '../../assets/images/home_icn.png';
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/images/sync.png';
import profile from '../../assets/images/profile.png';

const SideMenu = () => {
    return (
        <>
            <div className='side-menu'>
                <div className='side-bar'>
                    <img src={burger_menu} className='burger-menu' alt="" />
                    <img src={home_icn} className='home_icn' alt="" />
                </div>


                <div className='header'>
                    <div>
                        <img src={pass_logo} className='pass_logo' alt="" />
                    </div>
                </div>

                <div className='rect'>

                </div>


            </div>
        </>
    )
}

export default SideMenu;