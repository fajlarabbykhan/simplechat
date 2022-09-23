import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a Friend' />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="userChatInfo">
                    <span>Fajla Rabby</span>
                </div>
            </div>

        </div>
    );
};

export default Search;