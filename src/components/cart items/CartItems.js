import React, { useState, useEffect } from 'react';
import { Vegitables_vegis } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    // Initialize a state to track the count for each item
    const [items, setItems] = useState(Vegitables_vegis); // Initialize with actual items
    const [counts, setCounts] = useState(items.map(() => 1)); // Set default count to 1 for each item
    const [total, setTotal] = useState(0); // State to track the total price

    // Function to handle the increment of item count
    const handleInc = (index) => {
        setCounts((prevCounts) =>
            prevCounts.map((count, i) => (i === index ? count + 1 : count))
        );
    };

    // Function to handle the decrement of item count
    const handleDec = (index) => {
        setCounts((prevCounts) => {
            const newCounts = prevCounts.map((count, i) => (i === index ? count - 1 : count));

            // If the count reaches 0, remove the item
            if (newCounts[index] === 0) {
                // Remove the item from both items and counts
                const newItems = items.filter((_, i) => i !== index);
                const updatedCounts = newCounts.filter((_, i) => i !== index);

                setItems(newItems);
                setCounts(updatedCounts);
            }

            return newCounts;
        });
    };

    // Calculate total price whenever items or counts change
    useEffect(() => {
        const newTotal = items.reduce((acc, item, i) => acc + counts[i] * Number(item.price), 0);
        setTotal(newTotal);
    }, [counts, items]);

    const navigate = useNavigate();

    return (
        <div className="card_items-home">
            <div className="flex flex-col justify-between">
                {items.length > 0 ? (
                    items.slice(0, 5).map((val, i) => (
                        <div key={val.id} className="flex py-4 gap-2 rounded-xl px-2 cursor-pointer">
                            <div
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                                onClick={() => {
                                    navigate('/checkout');
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <img src={val.image} className="w-[150px] h-full rounded" alt={val.title} />
                            </div>
                            <div className="px-3">
                                <p className="mb-1">{val.title}</p>
                                {/* Calculate total for this item using its specific count */}
                                <p>
                                    Price : <span className='text-green-400'> ₹ {counts[i] * Number(val.price)} </span>
                                </p>
                                <p className="mb-2 text-[13px]"> Qty : 1 kg </p>
                                <div className="flex mt-1 border border-gray-500 rounded-lg w-[95px]">
                                    {/* Increment and decrement handlers for this specific item */}
                                    <p
                                        className="border-r border-gray-500 py-1 px-[8px] text-[14px] flex justify-center items-center cursor-pointer"
                                        onClick={() => handleInc(i)}
                                    >
                                        +
                                    </p>
                                    <p className="border-r border-gray-500 py-1 px-[9px] text-[11px] flex justify-center items-center cursor-pointer">
                                        {counts[i]} /Kg
                                    </p>
                                    <p
                                        className="py-1 px-[6px] text-[14px] cursor-pointer"
                                        onClick={() => handleDec(i)}
                                    >
                                        -
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                        <p className='text-green-200 font-light text-xl py-5'> Your Cart is Empty ! </p>
                        <div className=' w-full'>
                            <button className='border border-gray-300 w-full py-[11px] hover:bg-green-300 hpover:textblack transition-all duration-500' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { navigate("allfruits"); window.scrollTo(0, 0) }}> RAICES </button>
                        </div>
                        <div className=' w-full'>
                            <button className='border border-gray-300 w-full py-[11px] hover:bg-green-300 hpover:textblack transition-all duration-500' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { navigate("allfruits"); window.scrollTo(0, 0) }}> OILS </button>
                        </div>
                        <div className=' w-full'>
                            <button className='border border-gray-300 w-full py-[11px] hover:bg-green-300 hpover:textblack transition-all duration-500' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { navigate("allfruits"); window.scrollTo(0, 0) }}> VEGETABLES </button>
                        </div>
                        <div className=' w-full'>
                            <button className='border border-gray-300 w-full py-[11px] hover:bg-green-300 hpover:textblack transition-all duration-500' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { navigate("allfruits"); window.scrollTo(0, 0) }}> FRUITS </button>
                        </div>

                        <div className='w-full'>
                            <button className='border border-gray-300 w-full py-[11px] hover:bg-green-300 hpover:textblack transition-all duration-500' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { navigate("allfruits"); window.scrollTo(0, 0) }}> PULSES </button>
                        </div>
                    </div>  // Message when no items are available
                )}

                <div className="container bg-green-200 py-3 font-semibold sticky bottom-0 text-black mt-3">
                    <div className="flex justify-between items-center mb-3">
                        <p>TOTAL</p>
                        {/* Display dynamic total */}
                        <p>₹ {total}</p>
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-black text-white tracking-[14px] px-4 py-2 mb-3 transition-all duration-500"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            onClick={() => {
                                navigate('/checkout');
                                window.scrollTo(0, 0);
                            }}
                        >
                            CHECK OUT
                        </button>
                        <p
                            className="cursor-pointer"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            onClick={() => {
                                navigate('/allfruits');
                                window.scrollTo(0, 0);
                            }}
                        >
                            Continue Shopping <FontAwesomeIcon icon={faArrowRight} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
