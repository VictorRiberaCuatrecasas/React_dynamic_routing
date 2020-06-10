import React from 'react';

function Home(){

    return(
        <div className="home row d-flex justify-content-center">
            <h1 className="col-12 text-center mt-5">HOME</h1>
            <p className="col-12 text-center mt-3">This is just a web sample to test React.js dynamic routing and toying with the Fortnite API</p>
            <img className="d-flex justify-content-center mb-5" src="https://media.fortniteapi.io/images/map.png?showPOI=true" alt="fortnite_map"/>
        </div>
    )
}

export default Home