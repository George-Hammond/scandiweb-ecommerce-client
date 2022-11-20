import React from 'react';
import '../../../Styles/cartDropDown.css';

class CartDropdownItems extends React.PureComponent {
    renderAttributeAbove2() {
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
                    <h3>{cartData.attributes[2].name} :</h3>
                    <div className="cart-dropdown-touchId">
                        {cartData.attributes[2].items.map((item, index) => {
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
                    <h3>{cartData.attributes[0].name} :</h3>
                    <div className="cart-dropdown-size-category">
                        {cartData.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
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
                            return <p key={item.id}>{item.displayValue}</p>;
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
                        return <p key={item.id}>{item.value}</p>;
                    })}
                </div>
            </div>
        );
    }

    renderDisplayDescription() {
        const { cartData } = this.props;
        const attributesLength = cartData.attributes.length;
        switch (attributesLength) {
            case attributesLength > 2:
                this.renderAttributeAbove2();
                break;
            case attributesLength > 1:
                switch (cartData) {
                    case cartData.name === 'iphone 12 pro':
                        this.renderAttributeIphone12();
                        break;
                    default:
                        this.renderAttributeOf1();
                }
                break;
            case attributesLength > 0:
                this.renderAttribute0();
                break;
            default:
                return '';
        }
    }
    render() {
        const { cartData, currencyIndex } = this.props;
        this.renderDisplayDescription();

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
                        <button id="increase">+</button>
                        <p>1</p>
                        <button id="decrease">-</button>
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

//
