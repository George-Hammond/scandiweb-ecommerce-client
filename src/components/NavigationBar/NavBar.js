import React from "react";
import '../../Styles/NavBar.css';
import GreenBag from '../../images/green-bag.svg';
import Cart from '../../images/cart.svg';
import ArrowDown from '../../images/arrowDown.svg';
import { NavLink } from "react-router-dom";

class NavBar extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            isAllActive: true,
            isClothesActive: false,
            isTechActive: false
        }

        
    }
    render(){
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>                        
                        <ul>
                            <NavLink to='/'                         
                            >                                  
                                All
                            </NavLink>
                            <NavLink to='clothes'                                                                
                            >
                                Clothes
                            </NavLink >
                            <NavLink to='tech'                                                              
                            >
                                Tech
                            </NavLink >
                        </ul>        
                    </div>
                    <div className='middle-logo'>
                        <img src={GreenBag} alt="green bag logo" />
                    </div>
                    <div className="actions">
                        <img src={ArrowDown} alt="more currencies" id="arrow-down" onClick={this.toggleCurrencySymbol}/>
                        <img src={Cart} alt="Cart" id="cart-logo" onClick={this.toggleCart} />
                    </div>
                </div>
            </nav>
        )
    }
}


export default NavBar;