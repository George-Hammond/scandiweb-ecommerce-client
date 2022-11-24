import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import CartDropdownItems from './cartDropdownItems';
import {
    CART_PRODUCT_QUERY,
    CURRENCY_QUERY,
} from '../../../graphQLQuery/cardQuery';
import '../../../Styles/cartDropDown.css';

class CartDropdown extends React.PureComponent {
    renderCurrencyLogo() {
        const { currencyIndex, sumProductPrice } = this.props;
        return (
            <Query query={CURRENCY_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;

                    if (error) return <div>Error: {error.message}</div>;

                    return (
                        <p id="drop-down-total-amount">
                            {data.currencies[currencyIndex].symbol}
                            {sumProductPrice}
                        </p>
                    );
                }}
            </Query>
        );
    }
    render() {
        const { toggleCart, cartItems, currencyIndex, sumProductPrice } =
            this.props;
        const listItems = cartItems.map((cartItem) => (
            <Query
                query={CART_PRODUCT_QUERY}
                variables={{ productId: `${cartItem}` }}
            >
                {({ loading, error, data }) => {
                    if (loading) return '';
                    if (error) return `Error: ${error.message}`;

                    return (
                        <CartDropdownItems
                            key="0"
                            cartItems={cartItems}
                            cartData={data.product}
                            currencyIndex={currencyIndex}
                        />
                    );
                }}
            </Query>
        ));
        const displayCartItem = () => {
            return <>{listItems}</>;
        };
        return cartItems.length > 0 ? (
            <div className="cart-dropdown-wrapper">
                <p id="drop-title">
                    My Bag,
                    {cartItems.length > 0 && (
                        <span>
                            {cartItems.length}{' '}
                            {cartItems.length > 1 ? 'items' : 'item'}
                        </span>
                    )}
                </p>
                {displayCartItem()}
                <div className="drop-down-amount">
                    <p id="drop-down-total">Total</p>
                    {this.renderCurrencyLogo()}
                </div>
                <div className="cart-dropdown-btn">
                    <Link to="cart">
                        <button id="view-bag">View Bag</button>
                    </Link>
                    <button id="check-out">Check Out</button>
                </div>
            </div>
        ) : (
            <div className="cart-dropdown-wrapper">
                <p id="drop-title-empty">Cart is Empty.</p>
            </div>
        );
    }
}

export default CartDropdown;

{
    /* <p id="drop-down-total-amount"> */
}
{
    /* $ */
}
{
    /*sumProductPrice*/
}
{
    /* </p>; */
}
