import React, { useState } from 'react';
const Service = () => {
    const services = {
    Clinic: ['/apas-img1.jpg', 'Description of clinic services'],
    Police: ['/apas-img2.jpg', '24/7 police assistance'],
    Fire: ['/apas-img3.jpg', 'Emergency fire response and rescue']
  };
    const [count, setCount] = useState(0);
    const keys = Object.keys(services);
    const currentKey = keys[count];
    const currentKeyServices = services[currentKey];
    const handleNext = () =>{
        return setCount((value) => (value != keys.length - 1 ? count+1 : 0));
    }
    const handlePrev = () =>{
        return setCount((value) => (value != 0 ? count - 1 : keys.length-1));
    }
    return(
        <div className='flex flex-row justify-evenly items-center p-10'>
            <div id={"slide"+{count}} className="carousel-item relative w-1/2">
                <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full " />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={handlePrev} className="btn btn-circle">❮</button>
                <button onClick={handleNext} className="btn btn-circle">❯</button>
                </div>
            </div>            
            <div className="flex flex-col p-10 bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100 rounded-2xl shadow-lg border-l-8 border-blue-400 max-w-lg">
                <h1 className="text-4xl font-extrabold my-6 text-blue-700 drop-shadow">Services Offered</h1>
                <p className="text-lg text-blue-700 bg-yellow-100 rounded-xl p-4 border-l-8 border-red-400 shadow mb-4">
                    Barangay Apas offers:
                </p>
                <div className='flex flex-col gap-2 text-lg font-semibold text-red-600'>
                    {currentKeyServices[1]}
                </div>
            </div>
            <div className='flex justify-center p-10'>
            </div>

        </div>
    );
}
export default Service;