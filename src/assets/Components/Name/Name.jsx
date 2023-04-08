import React from 'react';

const Name = ({main, addHandle}) => {
    const {name, id} = main; 
    return (
        <div className='bg-purple-400'>
            <h2 onClick={()=>addHandle(main)} className='text-xl font-semibold m-3'>{name}</h2>
        </div>
    );
};

export default Name;