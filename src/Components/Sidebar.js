import React from 'react';
import Navbar from '../Components/Navbar'
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
};

export default Sidebar;