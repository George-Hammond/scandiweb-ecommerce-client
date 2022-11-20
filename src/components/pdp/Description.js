import React from 'react';
import '../../Styles/description.css';

class Description extends React.PureComponent {
    renderAttributeAbove2() {
        const { productData } = this.props;

        return (
            <>
                <div className="size-section">
                    <h3>{productData.product.attributes[0].name}</h3>
                    <div className="size-category">
                        {productData.product.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="size-section">
                    <h3>{productData.product.attributes[1].name}</h3>
                    <div className="size-category">
                        {productData.product.attributes[1].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="touchId-section">
                    <h3>{productData.product.attributes[2].name}:</h3>
                    <div className="touchId">
                        {productData.product.attributes[2].items.map(
                            (item, index) => {
                                return <p key={item.id}>{item.displayValue}</p>;
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }
    renderAttributeIphone12() {
        const { productData } = this.props;
        return (
            <>
                <div className="size-section">
                    <h3>{productData.product.attributes[0].name}</h3>
                    <div className="size-category">
                        {productData.product.attributes[0].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="color-section">
                    <h3>Color:</h3>
                    <div className="colors">
                        {productData.product.attributes[1].items.map(
                            (item, index) => {
                                return (
                                    <p
                                        key={item.id}
                                        style={{
                                            backgroundColor: item.displayValue,
                                        }}
                                    ></p>
                                );
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }

    renderAttributeOf1() {
        const { productData } = this.props;
        return (
            <>
                <div className="size-section">
                    <h3>{productData.product.attributes[1].name}</h3>
                    <div className="size-category">
                        {productData.product.attributes[1].items.map((item) => {
                            return <p key={item.id}>{item.displayValue}</p>;
                        })}
                    </div>
                </div>
                <div className="color-section">
                    <h3>Color:</h3>
                    <div className="colors">
                        {productData.product.attributes[0].items.map(
                            (item, index) => {
                                return (
                                    <p
                                        key={item.id}
                                        style={{
                                            backgroundColor: item.displayValue,
                                        }}
                                    ></p>
                                );
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }

    renderAttribute0() {
        const { productData } = this.props;
        return (
            <div className="size-section">
                <h3>{productData.product.attributes[0].name}</h3>
                <div className="size-category">
                    {productData.product.attributes[0].items.map((item) => {
                        return <p key={item.id}>{item.value}</p>;
                    })}
                </div>
            </div>
        );
    }

    renderDisplayDescription() {
        const { productData } = this.props;
        const attributes = productData.product.attributes.length;
        switch (attributes) {
            case attributes > 2:
                this.renderAttributeAbove2();
                break;
            case attributes > 1:
                switch (productData) {
                    case productData.name === 'iphone 12 pro':
                        this.renderAttributeIphone12();
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
        const { productData, addToCart, currencyIndex } = this.props;

        this.renderDisplayDescription();

        return (
            <div className="description-section">
                <h1>{productData.product.brand}</h1>
                <h2>{productData.product.name}</h2>
                <>{this.renderDisplayDescription()}</>
                <div className="price-section">
                    <h3>Price:</h3>
                    <p>
                        {
                            productData.product.prices[currencyIndex].currency
                                .symbol
                        }
                        {productData.product.prices[currencyIndex].amount}
                    </p>
                </div>
                <div className="add-to-cart">
                    <button onClick={addToCart}>Add to cart</button>
                </div>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: productData.product.description,
                    }}
                ></div>
            </div>
        );
    }
}

export default Description;
