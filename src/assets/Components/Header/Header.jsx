import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-xl mr-4' to='/'>Home</Link>
            <Link className='text-xl mr-4' to='/'> About</Link>
            <Link className='text-xl mr-4' to='/'>Person</Link>
        </div>
    );
};

export default Header;