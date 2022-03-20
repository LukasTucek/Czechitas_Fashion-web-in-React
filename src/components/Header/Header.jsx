import React from "react";
import './style.css';


const Header = ( {title} ) => {
    return (
        <>   
            <header className="header">
			    <h1 className="header__title">{title}</h1>
			    <p className="header__description">Stylové oblečení a doplňky pro každý den</p>
            </header>
        </> 
    )
};

export default Header;