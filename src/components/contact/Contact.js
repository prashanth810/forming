import React from 'react'

const Contact = () => {
    return (
        <div className='contact_home veg_home md:p-0 p-[10px]'>
            <div className='text-center text-2xl md:pt-10 pt-3 text-gray-500'>
                <p className='text-gray-200'> Contact <span className='text-gray-400 font-medium'> Us</span></p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col my-10 md:flex-row justify-center md:gap-12 gap-8'>
                    <img src="https://www.shutterstock.com/shutterstock/videos/1104746657/thumb/12.jpg?ip=x480" className='w-full md:max-w-[360px]' />
                    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-300'>
                        <p className='text-2xl'>OUR LOCATION </p>
                        <p> abc colony ,<br /> abc road , abc city , 500038 </p>
                        <p>  91-8106124493 </p>
                        <h6 className='text-gray-400 font-bold'> Email </h6>
                        <p> prashanth554554@gmail.com </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center md:items-center'>
                <div className='flex flex-col-reverse my-10 md:flex-row justify-center md:gap-12 gap-8 md:w-[70%]'>

                    <div className='flex flex-col justify-center  gap-6 md:w-full text-sm text-gray-300'>
                        <p className='text-gray-200 text-3xl'> Send <span className='text-gray-400 font-medium'> Message </span></p>
                        <form>
                            <div>
                                <input className='border border-gray-400 mb-3 w-full p-3 px-[10px] bg-transparent' placeholder='Enter name...' type='text' />
                            </div>
                            <div>
                                <input className='border border-gray-400 mb-3 w-full py-3 px-[10px] bg-transparent' placeholder='Enter name...' type='text' />
                            </div>
                            <div>
                                <textarea className='border border-gray-400 mb-3 w-full p-2 bg-transparent' rows='6' placeholder='Enter Message...' />
                            </div>
                            <div>
                                <button className='border border-gray-400 mb-3 w-full text-lg font-bold py-3 hover:text-black hover:bg-green-400 transition-all duration-500' > SEND MESSSAGE </button>
                            </div>
                        </form>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36209.70170747231!2d78.37138711934503!3d17.456073996261747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1728109119812!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full md:max-w-[360px]'></iframe>
                </div>
            </div>


        </div>
    )
}

export default Contact
