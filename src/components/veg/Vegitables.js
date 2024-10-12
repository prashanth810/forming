import React from 'react';
import { Vegitables_vegis } from '../data/Data';
import './Veg.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Vegitables = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='veg_home' id='fruits'>
                <div className='veg_main_heading'>
                    <div className='text-center md:pt-14 pt-4 md:pb-6 pb-2'>
                        <h1 className='text-[42px] font-semibold text-white'>
                            <span className="wrapper relative inline-block">
                                Best Fruit's for Order
                                <div className="underline-animation">
                                    <div className="spacer-left"></div>
                                    <div className="underline"></div>
                                    <div className="spacer-right"></div>
                                </div>
                            </span>
                        </h1>
                        <p className='py-3 text-gray-400 text-[15px]'>
                            Easy to Order Fruit's  here
                        </p>
                    </div>

                    <div className='container'>
                        <div className='flex justify-between items-center'>
                            <div></div> {/* Empty div for spacing */}
                            <p className='flex items-center gap-3 pb-4 md:pr-5 hover:duration-500 hover:text-yellow-400 transition-all cursor-pointer md:pl-0 text-right'
                                onClick={() => {
                                    navigate(`/allfruits`);
                                    window.scrollTo(0, 0)
                                }}>
                                View All <FontAwesomeIcon icon={faArrowRight} />
                            </p>
                        </div>
                        <div className='w-full grid md:grid-cols-5 grid-cols-1 grid-cols-auto gap-4 gap-y-6 md:px-4  sm:px-0 pb-5'>
                            {Vegitables_vegis.filter(val => val.category === "Fruits").slice(0, 5).map((val, i) => {
                                return (
                                    <div key={val.id} onClick={() => { navigate(`fruits/${val.id}`); window.scrollTo(0, 0) }}>
                                        <div className='vegitable_map'>
                                            <div class="vegis border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-6px] transition-all duration-500 relative">
                                                <div className='fruits_images_div relative'>
                                                    <img src={val.image} class="fruits_images_fruits bg-blue-50 hover:bg-green-200" />
                                                    <div className='share_icon_div absolute top-[15px] right-[15px] '>
                                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-red-600' />
                                                    </div>
                                                </div>

                                                <div class="p-[10px]">
                                                    <div class="flex items-center gap-2 text-sm text-center text-green-500">
                                                        <p class="bg-green-500 w-2 h-2 rounded-full"></p>
                                                        <p>{val.available}</p>
                                                    </div>
                                                    <p class="text-gray-300 text-lg font-medium">{val.title}</p>
                                                    <p className='text-[11px] text-green-500'>{val.famer}</p>
                                                    <div className='flex justify-between py-[4px]'>
                                                        <p class="text-gray-400 font-semibold text-[11px]">
                                                            Offered price : <span className='text-[14px] text-green-500'>{val.discount_price}</span>
                                                        </p>
                                                        <p class="text-gray-400 font-semibold text-[11px]">
                                                            Original price <span className='text-[14px] text-green-500'>{val.discount_price}</span>
                                                        </p>
                                                    </div>
                                                    {/* <div className='card_footer'>
                                                        <p class="text-gray-400 font-semibold text-[12px]">
                                                            Farmer <span className='text-[14px] text-green-500'>{val.famer}</span>
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vegitables
