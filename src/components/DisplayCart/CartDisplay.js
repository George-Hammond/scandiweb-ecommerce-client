import React from 'react';
import '../../Styles/cartDisplay.css';

class CartDisplay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0,
        };

        this.changeImageOnLeft = this.changeImageOnLeft.bind(this);
        this.changeImageOnRight = this.changeImageOnRight.bind(this);
    }

    changeImageOnLeft() {
        const { imageIndex } = this.state;
        if (imageIndex < 1) {
            this.setState({
                imageIndex: 0,
            });
        } else {
            this.setState((prevImageIndex) => ({
                imageIndex: prevImageIndex.imageIndex - 1,
            }));
        }
    }

    changeImageOnRight() {
        this.setState((prevImageIndex) => ({
            imageIndex: prevImageIndex.imageIndex + 1,
        }));
    }
    renderAttributeAbove2() {
        const { cartData } = this.props;
        return (
            <>
                <div className="cart-attributes-size-section greaterTwo">
                    <h3>{cartData.attributes[0].name}</h3>
                    <div className="cart-attributes-size-category">
                        {cartData.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="cart-attributes-size-section">
                    <h3>{cartData.attributes[1].name}</h3>
                    <div className="cart-attributes-size-category">
                        {cartData.attributes[1].items.map((item) => {
                            return (
                                <p key={item.id} id="u-port">
                                    {item.displayValue}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="cart-attributes-color-section">
                    <h3>{cartData.attributes[2].name} :</h3>
                    <div className="cart-attributes-colors">
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
                <div className="cart-attributes-size-section">
                    <h3>{cartData.attributes[0].name}</h3>
                    <div className="cart-attributes-size-category">
                        {cartData.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="cart-attributes-color-section">
                    <h3>Color:</h3>
                    <div className="cart-attributes-colors">
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

    renderAttributeNikeAir() {
        const { cartData } = this.props;
        return (
            <>
                <div className="cart-attributes-size-section">
                    <h3>{cartData.attributes}</h3>
                    <div className="cart-attributes-size-category">
                        {cartData.attributes[1].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="cart-attributes-color-section">
                    <h3>Color:</h3>
                    <div className="cart-attributes-colors">
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

    renderAttributeOf1() {
        const { cartData } = this.props;
        return (
            <>
                <div className="cart-attributes-size-section">
                    <h3>{cartData.attributes}</h3>
                    <div className="cart-attributes-size-category">
                        {cartData.attributes[1].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="cart-attributes-color-section">
                    <h3>Color:</h3>
                    <div className="cart-attributes-colors">
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
            <div className="cart-attributes-size-section">
                <h3>{cartData.attributes[0].name}</h3>
                <div className="cart-attributes-size-category">
                    {cartData.attributes[0].items.map((item) => {
                        return <p key={item.id}>{item.value}</p>;
                    })}
                </div>
            </div>
        );
    }

    renderDisplayDescription() {
        const { cartData } = this.props;
        const attributes = cartData.attributes.length;
        switch (attributes) {
            case attributes > 2:
                this.renderAttributeAbove2();
                break;
            case attributes > 1:
                switch (cartData) {
                    case cartData.name === 'iphone 12 pro':
                        this.renderAttributeIphone12();
                        break;
                    case cartData.name === 'Nike Air Huarache Le':
                        this.renderAttributeNikeAir();
                        break;
                    default:
                        this.renderAttributeOf1();
                }
                break;
            case attributes > 0:
                this.renderAttribute0();
                break;
            default:
                return '';
        }
    }

    render() {
        const { cartData, currencyIndex } = this.props;
        const { imageIndex } = this.state;
        this.renderDisplayDescription();

        //Return
        return (
            <>
                <div className="cart-display-cart">
                    <div className="cart-attributes">
                        <div className="">
                            <h2>{cartData.brand}</h2>
                            <h3 id="cartData-name">{cartData.name}</h3>
                            <div className="cart-attributes-price-section">
                                <p>
                                    {
                                        cartData.prices[currencyIndex].currency
                                            .symbol
                                    }
                                    {cartData.prices[currencyIndex].amount}
                                </p>
                            </div>
                            {this.renderDisplayDescription()}
                        </div>
                        <div className="toggle-add">
                            <button id="increase">+</button>
                            <p>1</p>
                            <button id="decrease">-</button>
                        </div>
                    </div>
                    <div className="cart-attributes-product-quantity">
                        <div className="cart-attributes-product-quantity-image">
                            <img
                                src={cartData.gallery[imageIndex]}
                                alt={cartData.name}
                            />
                            <div className="toggle-img">
                                <button
                                    id="lesser"
                                    onClick={this.changeImageOnLeft}
                                >
                                    &gt;
                                </button>
                                <button
                                    id="greater"
                                    onClick={this.changeImageOnRight}
                                >
                                    &lt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="h-rule"></hr>
            </>
        );
    }
}

export default CartDisplay;
