import React from "react";
import './style.css';


const Footer = (props) => {
    return (
        <>   
            <footer className="footer">
			    <p className="footer__copyright">&copy; {props.year}, {props.author}</p>
			    <p className="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
		    </footer>
        </> 
    )
};

export default Footer;