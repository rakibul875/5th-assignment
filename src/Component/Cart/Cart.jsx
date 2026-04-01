import React from 'react';

const Cart = ({ carts }) => {
    const total=carts.reduce((sum,item)=>sum +item.price,0)
    return (
        <div className='bg-white border border-gray-200 rounded-3xl p-4 md:p-10 shadow-xl  bottom-6 max-w-[1200px] mx-auto'>
            <h1 className='text-5xl font-bold'>Your Carts</h1>
            {
                carts.map(cart =>
                    <div className="">
                        <div class="space-y-5 mt-5">
                            <div class="py-10 px-5 bg-gray-100 w-full btn flex justify-between item center rounded-3xl hover:bg-linear-to-r from-[#9614fa18] to-[#4f39f618] hover:shadow-md hover:shadow-indigo-400/50 transition duration-300">
                                <div class="flex gap-2 items-center">
                                    <img src={cart.icon} alt="" />
                                    <div className="">
                                        <h2>{cart.name}</h2>
                                        <p>${cart.price}/month</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button className=' btn border-none shadow-none bg-transparent text-red-600 hover:btn rounded-2xl hover:bg-white  hover:shadow-lg hover:shadow-indigo-400/50 transition duration-500'>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="mt-5 flex justify-between items-center">
                <div className=""><h1 className='text-3xl font-bold'>Total Amount</h1></div>
                <div className=""><p className='text-3xl font-bold'>${total}</p></div>
            </div>
            <div className="mt-5">
                <button className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;