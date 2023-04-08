import React from 'react';
import Passing from '../Passing/Passing';

const Person = ({removeHandle, persons}) => {
    // const {id , img_url , name} = main;
    // console.log(persons)
    return (
        <div>
           <h2>All : {persons.length}</h2>
          <div className='grid md:grid-cols-2'>
          {
            persons.map(m=> <Passing removeHandle={removeHandle} key={m.id} main={m}></Passing>)
           }
          </div>
        </div>
    );
};

export default Person;