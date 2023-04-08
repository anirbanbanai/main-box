import React from 'react';

const Passing = ({main ,removeHandle}) => {
    return (
        <div className='flex mx-auto'>
            <img className='ml-4 mt-2 mb-2 rounded-xl h-[150px]' src={main.img_url} alt="" />
            <div>
            <h2 className='ml-9'>{main.name}</h2>
            <h2 className='ml-9'>{main.id}</h2>
            </div>
            <button onClick={()=> removeHandle(main.id)} className='bg-yellow-400 px-4 py-2'>X</button>
        </div>
    );
};

export default Passing;