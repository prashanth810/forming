import { faCircleUser, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';


const About = () => {
    const [customers, setCustomers] = useState(0);
    const [farmers, setFarmers] = useState(0);
    const [orders, setOrders] = useState(0);
    const [revenue, setRevenue] = useState(0);


    useEffect(() => {
        const time = setTimeout(() => {
            if (customers < 100) {
                setCustomers((prev) => prev + 1);
            }
        }, 30);
        return () => {
            clearInterval(time);
        }
    }, [customers]);

    useEffect(() => {
        const time = setTimeout(() => {
            if (farmers < 86) {
                setFarmers((prev) => prev + 1);
            }
        }, 30);
        return () => {
            clearInterval(time);
        }
    }, [farmers]);

    useEffect(() => {
        const time = setTimeout(() => {
            if (orders < 50) {
                setOrders((prev) => prev + 1);
            }
        }, 30);
        return () => {
            clearInterval(time);
        }
    }, [orders]);

    useEffect(() => {
        const time = setTimeout(() => {
            if (revenue < 150) {
                setRevenue((prev) => prev + 1);
            }
        }, 1);
        return () => {
            clearInterval(time);
        }
    }, [revenue]);


    return (
        <div className='abot_home veg_home'>
            <div className='md:p-0 p-3'>
                <div className='text-center text-2xl md:pt-10 pt-3 text-gray-500'>
                    <p className='text-gray-200 text-4xl'> About <span className='text-gray-400 font-medium'> Us</span></p>
                </div>
                <div className='flex flex-col my-10 md:flex-row justify-center md:gap-12 gap-8'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5JDaIvpkBmdW6PAD7saQltuufSJIMleXIiyRScpGHbmVVd2ZQa4oYdOa-_NckHi0Mqs&usqp=CAU" className='w-full md:max-w-[360px]' />
                    {/* https://t4.ftcdn.net/jpg/02/04/55/71/360_F_204557171_26X0AaouQwVlRqOtkPtwypah2Qrs4TIx.jpg */}
                    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-300'>
                        <p> Help lower high blood pressure by regulating your cardiovascular system, Help lower high blood pressure by regulating your cardiovascular system . </p>

                        <p>  Help lower high blood pressure by regulating your cardiovascular system, Help lower high blood pressure by regulating your cardiovascular system . </p>

                        <h6 className='text-gray-400 font-bold'> Our vision</h6>
                        <p> Help lower high blood pressure by regulating your cardiovascular system, Help lower high blood pressure by regulating your cardiovascular system . </p>
                    </div>
                </div>


                {/* our success */}

                <div className='text-xl my-5 md:text-center'>
                    <div className=' md:p-3'>
                        <p className='text-3xl'> OUR  <span className='text-gray-400 '> SUCCESS </span> </p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center  gap-2'>
                    <div className='border px-10 md:px-6 py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointer hover:translate-y-[-4px] md:w-[300px] hover:shadow-[0px_0px_20px_0px_green]'>
                        <div className='flex flex-col md:mt-[1.5rem] justify-center items-center'>
                            <h3 className='text-gray-300 font-bold'> CUSTOMERS  </h3>
                            <p className='mt-3'><span className='text-4xl text-green-400'>  {`${customers}`}  <FontAwesomeIcon icon={faCircleUser} /> + </span> </p>
                        </div>
                    </div>

                    <div className='border px-10 md:px-[25px] py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointerr hover:translate-y-[-4px] md:w-[300px] hover:shadow-[0px_0px_20px_0px_green]'>
                        <div className='flex flex-col md:mt-[1.5rem] justify-center items-center'>
                            <h3 className='text-gray-300 font-bold'> FORMERS  </h3>
                            <p className='mt-3'><span className='text-4xl text-green-400'>  {`${farmers}`}  <FontAwesomeIcon icon={faCircleUser} /> + </span> </p>
                        </div>
                    </div>

                    <div className='border px-10 md:px-6 py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointerr hover:translate-y-[-4px] md:w-[300px] hover:shadow-[0px_0px_20px_0px_green] '>
                        <div className='flex flex-col md:mt-[1.5rem] justify-center items-center'>
                            <h3 className='text-gray-300 font-bold'> ORDERS  </h3>
                            <p className='mt-3'><span className='text-4xl text-green-400'>  {`${orders}`} <span className='text-2xl'>  <FontAwesomeIcon icon={faShoppingCart} /> +</span>  </span> </p>
                        </div>
                    </div>
                    <div className='border px-10 md:px-6 py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointerr hover:translate-y-[-4px] md:w-[300px] hover:shadow-[0px_0px_20px_0px_green] '>
                        <div className='flex flex-col md:mt-[1.5rem] justify-center items-center'>
                            <h3 className='text-gray-300 font-bold'> REVENUE  </h3>
                            <p className='mt-3'><span className='text-4xl text-green-400'>  {`${revenue}`} <span className='text-2xl text-orange-400'> <DollarCircleOutlined className='revenuecirclwed_icon' /> + </span>  </span> </p>
                        </div>
                    </div>
                </div>


                {/* why choose us  */}
                <div className='md:mt-[4.8rem]'>

                    <div className='md:text-center text-xl my-4 md:pl-[5.3rem] md:pr-[40px]'>
                        <div className=' md:p-3'>
                            <p className='text-3xl'> WHY <span className='text-gray-400 '> CHOOSE US </span> </p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center  gap-2'>
                        <div className='border px-10 md:px-6 py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointer hover:translate-y-[-4px] md:w-[402px] hover:shadow-[0px_0px_20px_0px_green]'>
                            <h3 className='text-gray-300 font-bold'> Efficiency : </h3>
                            <p> simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div className='border px-10 md:px-[25px] py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointerr hover:translate-y-[-4px] md:w-[402px] hover:shadow-[0px_0px_20px_0px_green]'>
                            <h3 className='text-gray-300 font-bold'>Convenience : </h3>
                            <p> simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div className='border px-10 md:px-6 py-8 md:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-400 cursor-pointerr hover:translate-y-[-4px] md:w-[402px] hover:shadow-[0px_0px_20px_0px_green] '>
                            <h3 className='text-gray-300 font-bold'> Personlization : </h3>
                            <p> simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
