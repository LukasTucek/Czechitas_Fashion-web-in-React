import React from "react";
import './style.css';
import Product from "../Product/Product"
import blueHandbag from '../../assets/blue-handbag.jpg';
import greyScarf from '../../assets/grey-scarf.jpg';
import glasses from '../../assets/glasses.jpg';


const Accessories = () => {
    return (
        <>   

        <section className="accessories">
			<h2>Doplňky</h2>
			<div className="products">

                <Product 
                    image={blueHandbag}
                    name={'Modrá kabelka'} 
                    description={'Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.'} 
                    price={'3590 Kč'}
                />

                <Product 
                    image={greyScarf}
                    name={'Šedá vlněná šála'} 
                    description={'Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.'} 
                    price={'970 Kč'}
                />

                <Product 
                    image={glasses}
                    name={'Brýle'} 
                    description={'Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.'} 
                    price={'1620 Kč'}
                />

                
            </div>
        </section>
        
        </> 

    )
};

export default Accessories;