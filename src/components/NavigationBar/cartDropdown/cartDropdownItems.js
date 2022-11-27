import React from 'react';
import '../../../Styles/cartDropDown.css';

class CartDropdownItems extends React.PureComponent {
    renderAttributeAbove2() {
        const { cartData } = this.props;
        return (
            <>
                <div className="cart-dropdown-capacity-section ">
                    <h3>{cartData.attributes[0].name} :</h3>
                    <div className="cart-dropdown-capacity-category">
                        {cartData.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="cart-dropdown-touchId-section">
                    <h3>{cartData.attributes[1].name} :</h3>
                    <div className="cart-dropdown-touchId">
                        {cartData.attributes[1].items.map((item, index) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
            </>
        );
    }
    renderAttributeIphone12() {
        const { cartData } = this.props;

        return (
            <>
                <div className="cart-dropdown-size-section">
                    <h3>{cartData.attributes[0].id} :</h3>
                    <div className="cart-dropdown-size-category">
                        {cartData.attributes[0].items.map((item) => {
                            return (
                                <p key={item.id} id="attr1-iphone">
                                    {item.displayValue}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="cart-dropdown-color-section">
                    <h3>{cartData.attributes[1].name}:</h3>
                    <div className="cart-dropdown-colors">
                        {cartData.attributes[1].items.map((item, index) => {
                            return (
                                <p
                                    key={item.id}
                                    style={{
                                        backgroundColor: item.displayValue,
                                    }}
                                    id="attr1-iphone-color"
                                ></p>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }

    renderAttributeOf1() {
        const { cartData } = this.props;

        return (
            <>
                <div className="cart-dropdown-size-section">
                    <h3>{cartData.attributes[1].name} :</h3>
                    <div className="cart-dropdown-size-category">
                        {cartData.attributes[1].items.map((item) => {
                            return (
                                <p key={item.id} id="atr1-p">
                                    {item.displayValue}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="cart-dropdown-color-section">
                    <h3>Color:</h3>
                    <div className="cart-dropdown-colors">
                        {cartData.attributes[0].items.map((item, index) => {
                            return (
                                <p
                                    key={item.id}
                                    style={{
                                        backgroundColor: item.displayValue,
                                    }}
                                ></p>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }

    renderAttribute0() {
        const { cartData } = this.props;
        return (
            <div className="cart-dropdown-size-section">
                <h3>{cartData.attributes[0].name} :</h3>
                <div className="cart-dropdown-size-category">
                    {cartData.attributes[0].items.map((item) => {
                        return (
                            <p key={item.id} id="atr0-p">
                                {item.value}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderAttribute0Shoe() {
        const { cartData } = this.props;
        return (
            <div className="cart-dropdown-size-section">
                <h3>{cartData.attributes[0].name} :</h3>
                <div className="cart-dropdown-size-category">
                    {cartData.attributes[0].items.map((item) => {
                        return (
                            <p key={item.id} id="atr0-p">
                                {item.value}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderAttribute0Jacket() {
        const { cartData } = this.props;
        return (
            <div className="cart-dropdown-size-section">
                <h3>{cartData.attributes[0].name} :</h3>
                <div className="cart-dropdown-size-category">
                    {cartData.attributes[0].items.map((item) => {
                        return (
                            <p key={item.id} id="atr0-p">
                                {item.value}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderDisplayDescription() {
        const { cartData } = this.props;
        const attributesLength = cartData.attributes.length;
        if (attributesLength > 2) {
            return this.renderAttributeAbove2();
        } else if (attributesLength > 1) {
            if (cartData.id === 'apple-iphone-12-pro') {
                return this.renderAttributeIphone12();
            } else {
                return this.renderAttributeOf1();
            }
        } else if (attributesLength > 0) {
            return this.renderAttribute0();
        } else {
            return '';
        }
    }

    render() {
        const {
            cartData,
            currencyIndex,
            increaseProduct,
            decreaseProduct,
            setProductQuantity,
        } = this.props;

        return (
            <div className="cart-dropdown">
                <div className="cart-dropdown-attribute-alltogether">
                    <div className="cart-dropdown-attribute">
                        <div className="cart-dropDown-attribute-name">
                            <h2>{cartData.brand}</h2>
                            <h3>{cartData.name}</h3>
                        </div>
                        <div className="cartDD-attributes-price-section">
                            <p>
                                {cartData.prices[currencyIndex].currency.symbol}
                                {cartData.prices[currencyIndex].amount}
                            </p>
                        </div>
                        {this.renderDisplayDescription()}
                    </div>
                    <div className="dropdown-toggle-add">
                        <button id="increase" onClick={increaseProduct}>
                            +
                        </button>
                        <p>{setProductQuantity}</p>
                        <button id="decrease" onClick={decreaseProduct}>
                            -
                        </button>
                    </div>
                </div>
                <div className="cart-dropdown-product-quantity">
                    <div className="cart-dropdown-product-quantity-image">
                        <img src={cartData.gallery[0]} alt={cartData.name} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartDropdownItems;
