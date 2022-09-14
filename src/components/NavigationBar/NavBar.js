import React from "react";
import '../../Styles/NavBar.css';
import GreenBag from '../../../images/green-bag.svg'

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>                        
                        <ul>
                            <li>ALL</li>
                            <li>CLOTHES</li>
                            <li>TECH</li>
                        </ul>        
                    </div>
                    <div className='middle-logo'>
                        <img src={GreenBag} alt="green bag logo" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;