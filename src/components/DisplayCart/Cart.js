import React from 'react';
import CartDisplay from './CartDisplay';
import { Query } from 'react-apollo';
import {
    CART_PRODUCT_QUERY,
    CURRENCY_QUERY,
} from '../../graphQLQuery/cardQuery';
import '../../Styles/cart.css';

class Cart extends React.PureComponent {
    render() {
        const {
            cartItems,
            currencyIndex,
            tax,
            sumProductPrice,
            productItemAmount,
        } = this.props;

        const listItems = cartItems.map((cartItem) => (
            <Query
                query={CART_PRODUCT_QUERY}
                variables={{ productId: `${cartItem}` }}
            >
                {({ loading, error, data }) => {
                    if (loading) return '';
                    if (error) return `Error: ${error.message}`;

                    return (
                        <>
                            <CartDisplay
                                key="0"
                                cartData={data.product}
                                currencyIndex={currencyIndex}
                            />
                        </>
                    );
                }}
            </Query>
        ));
        const displayCartItem = () => {
            return <>{listItems}</>;
        };
        const cartDisplay = () => {
            if (cartItems.length > 0) {
                return (
                    <>
                        {displayCartItem()}
                        <Query query={CURRENCY_QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return '';
                                if (error) return `Error: ${error.message}`;

                                return (
                                    <div className="card-attributes-bill">
                                        <p>
                                            Tax 21%:{' '}
                                            <span id="card-attributes-tax">
                                                {
                                                    data.currencies[
                                                        currencyIndex
                                                    ].symbol
                                                }
                                                {tax}
                                            </span>
                                        </p>
                                        <p>
                                            Quantity:{' '}
                                            <span>
                                                {' '}
                                                {productItemAmount.length}
                                            </span>
                                        </p>
                                        <p>
                                            Total:{' '}
                                            <span id="card-attributes-bill-total">
                                                {
                                                    data.currencies[
                                                        currencyIndex
                                                    ].symbol
                                                }
                                                {sumProductPrice}
                                            </span>
                                        </p>
                                        <button>Order</button>
                                    </div>
                                );
                            }}
                        </Query>
                    </>
                );
            } else {
                return (
                    <div className="card-attributes-bill">
                        <p id="empty-cart">Cart is Empty</p>
                    </div>
                );
            }
        };
        return (
            <div className="cart-display-section">
                <h1>Cart</h1>
                <hr></hr>
                {cartDisplay()}
            </div>
        );
    }
}

export default Cart;
