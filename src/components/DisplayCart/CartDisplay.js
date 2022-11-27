import React from 'react';
import '../../Styles/cartDisplay.css';
import { CART_PRODUCT_QUERY } from '../../graphQLQuery/cardQuery';
import { Query } from 'react-apollo';

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
        const { cartData } = this.props;
        const { imageIndex } = this.state;

        if (imageIndex < cartData.gallery.length - 1) {
            this.setState((prevImageIndex) => ({
                imageIndex: prevImageIndex.imageIndex + 1,
            }));
        } else {
            this.setState({
                imageIndex: cartData.gallery.length - 1,
            });
        }
    }
    renderAttributeA2() {
        const { cartData } = this.props;

        return (
            <div>
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
            </div>
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
                    <h3>{cartData.attributes[1].name}</h3>
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

    renderAttributeOf1() {
        const { cartData } = this.props;
        return (
            <>
                <div className="cart-attributes-size-section">
                    <h3>{console.log(cartData.attributes[1].name)}</h3>
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

    renderNike() {
        return (
            <Query
                query={CART_PRODUCT_QUERY}
                variables={{ productId: `huarache-x-stussy-le` }}
            >
                {({ loading, error, data }) => {
                    if (loading) return '';
                    if (error) return `Error: ${error.message}`;

                    return (
                        <div className="cart-attributes-size-section">
                            <h3>{data.product.attributes[0].name}</h3>
                            <div className="cart-attributes-size-category">
                                {data.product.attributes[0].items.map(
                                    (item) => {
                                        return (
                                            <p key={item.id}>{item.value}</p>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }

    renderJacket() {
        return (
            <Query
                query={CART_PRODUCT_QUERY}
                variables={{ productId: `jacket-canada-goosee` }}
            >
                {({ loading, error, data }) => {
                    if (loading) return '';
                    if (error) return `Error: ${error.message}`;

                    return (
                        <div className="cart-attributes-size-section">
                            <h3>{data.product.attributes[0].name}</h3>
                            <div className="cart-attributes-size-category">
                                {data.product.attributes[0].items.map(
                                    (item) => {
                                        return (
                                            <p key={item.id}>{item.value}</p>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }

    renderDisplayDescription() {
        const { cartData } = this.props;
        const attributesData = cartData.attributes.length;

        if (attributesData > 2) {
            return this.renderAttributeA2();
        } else if (attributesData > 1) {
            if (cartData.id === 'apple-iphone-12-pro') {
                return this.renderAttributeIphone12();
            } else {
                return this.renderAttributeOf1();
            }
        } else if (attributesData > 0) {
            console.log(cartData)
            if (cartData.id === 'huarache-x-stussy-le') {
                return this.renderNike();
            } else if (cartData.id === 'jacket-canada-goosee') {
                return this.renderJacket()
            }
            return this.renderAttribute0();
        } else {
            return '';
        }
    }

    render() {
        const { cartData, currencyIndex } = this.props;
        const { imageIndex } = this.state;
        // this.renderDisplayDescription();

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
