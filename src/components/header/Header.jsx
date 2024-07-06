import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center mx-4 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src="../../../public/images/profile.png" alt=""  className='w-[60px] h-[60px] rounded-full my-2'/>
        </header>
    );
};

export default Header;