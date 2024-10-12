import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Steps } from 'antd';

const Checkout = () => {
    const [steap1, setSteap1] = useState(true);
    const [steap2, setSteap2] = useState(false);
    const [steap3, setSteap3] = useState(false);

    const handlesteap2 = (e) => {
        e.preventDefault();
        setSteap2((prev) => !prev);
    }

    const handlesteap3 = (e) => {
        e.preventDefault();
        setSteap3((prev) => !prev);
    }

    return (
        <div className='checkout_home text-black'>
            <div className='container'>
                <div className='md:grid md:grid-cols-2 block md:px-20'>
                    <div className='w-full bg-green-100 border-r border-black'>
                        <div className='bg-white flex justify-around items-center'>
                            <div className='flex items-center justify-between px-3 py-2'>
                                <div className='md:block flex flex-col items-center justify-center px-[30px]'>
                                    <p className='bg-gray-200 rounded-full w-[30px] h-[30px] flex items-center justify-center'>1</p>
                                    <p>Sign up </p>
                                </div>
                                <div className='flex flex-col items-center justify-center px-[30px]'>
                                    <p className='bg-gray-200 rounded-full w-[30px] h-[30px] flex items-center justify-center'>2</p>
                                    <p> Enter details  </p>
                                </div>
                                <div className='flex flex-col items-center justify-center px-[30px]'>
                                    <p className='bg-gray-200 rounded-full w-[30px] h-[30px] flex items-center justify-center'>3</p>
                                    <p> Payment </p>
                                </div>
                            </div>
                        </div>
                        <div className='left_side'>
                            <div className='flex justify-between items-center py-3 px-2  border-b-2 border-dashed cursor-pointer border-gray-400' >
                                <p> STEP 1 </p>
                                <p> SIGN IN OR SIGN UP </p>
                                <p> </p>
                            </div>
                            {
                                steap1 &&
                                <div className='md:p-5 py-4 px-1'>
                                    <form className='text-center'>
                                        <div className='w-full'>
                                            <input type='text' className='w-[50%] px-2 py-2 rounded-md' placeholder='Phone Number' />
                                        </div>
                                        <button className='border-1 border-gray-400 my-3 px-5 py-2 rounded-full font-semibold hover:bg-green-400 hover:text-white transition-all duration-500' onClick={handlesteap2}> Continue </button>
                                    </form>
                                </div>


                            }

                            <div>
                                {
                                    steap2 ? (
                                        <div className='md:p-5 py-4 px-1'>
                                            <form className='text-center'>
                                                <div className='w-full'>
                                                    <p> Second para </p>
                                                </div>
                                                <button className='border-1 border-gray-400 my-3 px-5 py-2 rounded-full font-semibold hover:bg-green-400 hover:text-white transition-all duration-500' onClick={handlesteap3}> Continue </button>
                                            </form>
                                        </div>

                                    ) : ("")
                                }
                            </div>

                            <div>
                                {
                                    steap3 ? (
                                        <div className='md:p-5 py-4 px-1'>
                                            <form className='text-center'>
                                                <div className='w-full'>
                                                    <p> Third para </p>
                                                </div>
                                                <button className='border-1 border-gray-400 my-3 px-5 py-2 rounded-full font-semibold hover:bg-green-400 hover:text-white transition-all duration-500'> Continue </button>
                                            </form>
                                        </div>

                                    ) : ("")
                                }
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 bg-green-200 w-full'>
                        right side
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
