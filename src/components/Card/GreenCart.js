import React from 'react';
import GreenCartSvg from '../../images/greenCart.svg';
import '../../Styles/greenCart.css';

class GreenCart extends React.PureComponent {
    render() {
        return (
            <div id="green-cart" onClick={this.props.addToCart}>
                <img src={GreenCartSvg} id="green-cart" alt="green cart logo" />
            </div>
        );
    }
}

export default GreenCart;
