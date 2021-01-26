import React from 'react'
import NavBar from "../shared/NavBar"

import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';

function Home() {
    return (
        <div>
            <NavBar />  

            <SearchFromNav />
            <SearchFromInput />        
        </div>
    )
};

export default Home;
