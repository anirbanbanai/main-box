import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Person from '../Person/Person';
import Name from '../Name/Name';
import { toast } from 'react-hot-toast';


const Persons = () => {

    const person = useLoaderData();
    const [persons, setPerson] = useState([]);
    // console.log(person)

    const addHandle = (person) => {
        const have = persons.find(ps => ps.id === person.id);
        if (have) {
            return alert('already added')
        }
        else {
            const newcart = [...persons, person];
            setPerson(newcart);
            // console.log(newcart)
        }
    }
    const removeHandle = re => {
        const remove = persons.filter(ps => ps.id !== re);
        setPerson(remove)
    }

    return (
        <div className='grid grid-cols-3'>
            <div className='bg-blue-200'>
                <h2 className='text-2xl'>Main BOx</h2>
                <div className=''>
                    <input className='p-2 rounded-xl text-xl' type="text" placeholder='search' />
                    <button className='border px-3 py-1 ml-2 bg-slate-200 rounded-xl text-xl'> New</button>
                    <hr className='border-2 border-red-500 mt-5' />
                </div>
                <div>
                    {
                        person.map(m => <Name key={m.id} addHandle={addHandle} main={m}></Name>)
                    }
                </div>
            </div>


            <div className='col-span-2 bg-red-200'>
                <h1 className='text-2xl font-semibold'>All Person</h1>
                <div>
                    {
                        <Person
                            key={persons.id}
                            persons={persons}
                            removeHandle={removeHandle}
                        ></Person>
                    }
                </div>
            </div>
        </div>
    );
};

export default Persons;