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
        this.navClicked = this.navClicked.bind(this)
    }

    navClicked = (event) => {
        const idTag = event.currentTarget;
        console.log(idTag.id)
        switch(idTag.id){
            case "all":
                this.setState({
                    isAllActive: true,
                    isClothesActive: false,
                    isTechActive: false
                });
                break;
            
            case "clothes":
                this.setState({
                    isAllActive: false,
                    isClothesActive: true,
                    isTechActive: false
                });
                break;
            
            case "tech":
                this.setState({
                    isAllActive: false,
                    isClothesActive: false,
                    isTechActive: true
                });
                break;

            default: 
            this.setState({
                isAllActive: true,
                isClothesActive: false,
                isTechActive: false
            });
        }
    }
    render(){
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>                        
                        <ul>
                            <NavLink 
                                to='/'
                                id='all'
                                onClick={this.navClicked}                         
                                >  
                            <span
                                className={this.state.isAllActive ? 'activeClicked' : ''}
                            >
                                All
                            </span>                                
                            </NavLink>
                            
                            <NavLink 
                                to='clothes'
                                id="clothes"
                                onClick={this.navClicked}                                                                
                                >
                                <span
                                className={this.state.isClothesActive ? 'activeClicked' : ''}
                                >
                                    Clothes
                                </span>
                            </NavLink >

                            
                            <NavLink 
                                to='tech'
                                id="tech"
                                onClick={this.navClicked}                                                              
                                >
                                <span
                                    className={this.state.isTechActive ? 'activeClicked' : ''}
                                >                                    
                                    Tech
                                </span>
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