import React, { useState } from 'react';
import nav_cart from '../../assets/cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBarChart, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import nav_logo from '../../assets/logo.png';
import grocessary from '../../assets/grocery-image.png';
import CartItems from '../cart items/CartItems';

const Navbarforall = () => {
    const [showmenu, setShowmenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='navbar_all container md:px-20 md:py-[3px] sticky top-0 left-0 right-0 z-10 bg-[#0b0816]'>

            <nav className='flex items-center justify-between sticky top-0'>
                <img src={nav_logo} className='md:w-44 w-40 py-4 cursor-pointer' onClick={() => navigate("/")} />

                <ul className='hidden justify-between text-white md:flex md:justify-between gap-4'>
                    <li className='list-none inline-block'>
                        <NavLink
                            to='/home'
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-yellow-300 pb-2' : 'hover:border-b-2 border-yellow-300 pb-2 transition-all duration-[150ms]'
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='list-none inline-block'>
                        <NavLink
                            to='/allfruits'
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-yellow-300 pb-2' : 'hover:border-b-2 border-yellow-300 pb-2 transition-all duration-[150ms]'
                            }
                        >
                            All Products
                        </NavLink>
                    </li>

                    <li className='list-none inline-block'>
                        <NavLink
                            to='/feactures'
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-yellow-300 pb-2' : 'hover:border-b-2 border-yellow-300 pb-2 transition-all duration-[150ms]'
                            }
                        >
                            Feactures
                        </NavLink>
                    </li>

                    <li className='list-none inline-block'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-yellow-300 pb-2' : 'hover:border-b-2 border-yellow-300 pb-2 transition-all duration-[150ms]'
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li className='list-none inline-block'>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-yellow-300 pb-2' : 'hover:border-b-2 border-yellow-300 pb-2 transition-all duration-[150ms]'
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCircleUser} className='text-white text-3xl mt-2 cursor-pointer md:text-[32px] text-[28px]' onClick={() => { navigate("/"); window.scrollTo(0, 0) }} />
                    <img src={nav_cart} className='md:w-8 w-5 cursor-pointer' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                    <FontAwesomeIcon icon={faBarChart} className='md:hidden' style={{ color: "white", fontSize: "24px" }} onClick={() => setShowmenu(true)} />
                </div>

                <div className="offcanvas offcanvas-end bg-black text-white" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-b-2 border-dashed border-gray-400 ">
                        <p className="text-reset cursor-pointer" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faArrowRight} /></p>
                        <h5 id="offcanvasRightLabel" className='text-xl font-semibold'> CART 0 (item)</h5>
                        <button type="button" className="text-reset flex justify-between items-center text-[25px] py-2" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
                    </div>
                    <div className="offcanvas-body">
                        <CartItems />
                    </div>
                </div>
            </nav>

            {/* Mobile screen navbar */}
            <div className={`${showmenu ? "fixed w-[80%]" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-black text-white transition-all`}>
                <div className='flex items-center justify-between md:px-5 md:py-6 p-4'>
                    <img className='w-[8rem] lg:w-36 ' src={nav_logo} alt='' />

                    <button type="button" className="text-reset flex justify-between items-center text-3xl" onClick={() => setShowmenu(false)} >x</button>

                </div>

                <ul className='flex flex-col items-center gap-2 md:mt-5 px-5 text-lg font-medium'>
                    <NavLink to='/home' onClick={() => setShowmenu(false)} className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-300' : ''
                    }>
                        <p className='px-4 py-2 rounded inline-block'>Home</p>
                    </NavLink>

                    <NavLink to='/allfruits' onClick={() => setShowmenu(false)} className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-300' : ''
                    }>
                        <p className='px-4 py-2 rounded inline-block'>All Products</p>
                    </NavLink>

                    <NavLink to='/feactures' onClick={() => setShowmenu(false)} className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-300' : ''
                    }>
                        <p className='px-4 py-2 rounded inline-block'>Feactures</p>
                    </NavLink>

                    <NavLink to='/about' onClick={() => setShowmenu(false)} className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-300' : ''
                    }>
                        <p className='px-4 py-2 rounded inline-block'>About</p>
                    </NavLink>

                    <NavLink to='/contact' onClick={() => setShowmenu(false)} className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-300' : ''
                    }>
                        <p className='px-4 py-2 rounded inline-block'>Contact</p>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Navbarforall;
