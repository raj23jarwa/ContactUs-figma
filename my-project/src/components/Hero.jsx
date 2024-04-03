import React from 'react';
import msg from '../assets/ic_outline-message.svg';
import blkmsg from '../assets/blkmsg.svg';
import call from '../assets/ic_baseline-phone.svg';
import heroimage from '../assets/hero.svg';

const Hero = () => {
    return (
        <div className='flex flex-col gap-16 ml-28'>
            <div className='flex w-full flex-col gap-4 justify-around  items-start'>
                <h1 className='text-5xl text-black font-bold uppercase'>contact us</h1>
                <p className='text-md text-gray-600 w-[70%] font-bold'>
                    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT,
                    YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
                </p>
            </div>
            <div className='flex w-full flex-row  items-start'>

                <div className='flex w-1/2 flex-col gap-10 '>
                  
                    <div className='flex gap-10 '>
                        <button className='flex items-center justify-center bg-black text-sm text-white px-6 py-2 w-56 border-2 rounded-md'>
                            <img className="h-7 w-7 mr-2" src={msg} alt="" />
                            <span className="whitespace-nowrap uppercase">via support chat</span>
                        </button>
                        <button className='flex items-center justify-center text-sm bg-black px-6 py-2 w-56 border-2 rounded-md'>
                            <img className="h-7 w-7 mr-2" src={call} alt="" />
                            <span className=" text-white uppercase">via call</span>
                        </button>
                    </div>
                    <div className='flex'>
                        <button className='flex items-center justify-center  text-sm text-black px-56 py-2  border-gray-600 border-2 rounded-md w-[68%]'>
                            <img className="h-7 w-7 mr-2" src={blkmsg} alt="" />
                            <span className="whitespace-nowrap uppercase font-bold">via Email Form</span>
                        </button>
                    </div>
                    {/* input start */}
                    <div className=' w-3/4 flex  justify-center flex-col gap-7 '>
                        <div className="flex flex-col gap-4 ml-10">
                            <label htmlFor="name" className="text-gray-700 font-bold absolute text-base left-[11%] top-[68%] transform translate-y-1/2 bg-white px-1 mx-2">Name</label>
                            <input type="text" id="name" className="border border-gray-600 rounded-md py-2 px-3 w-[80%]" />
                        </div>
                        <div className="flex flex-col gap-4 ml-10">
                            <label htmlFor="email" className="text-gray-700 absolute text-base left-[12%] top-[78%] transform translate-y-1/2 bg-white font-bold">Email</label>
                            <input type="email" id="email" className="border border-gray-600 rounded-md py-2 px-3 w-[80%]" />
                        </div>
                        <div className="flex flex-col gap-4 ml-10">
                            <label htmlFor="message" className="text-gray-700 absolute text-base left-[12%] top-[88%] transform translate-y-1/2 bg-white font-bold">Message</label>
                            <textarea id="message" rows={5} className="border border-gray-600 rounded-md py-2 px-3 w-[80%]"></textarea>
                        </div>
                        <div className='flex justify-end w-[80%]'>
                            <button className='flex bg-black text-white px-14 py-3 rounded-md'> Submit</button>
                        </div>
                        {/* End of Input fields */}
                    </div>
                    {/* </div> */}
                </div>

                <div className='flex -mt-16 '>
                    {/* ml-[47%] mt-[-50%] */}
                    <img src={heroimage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;
