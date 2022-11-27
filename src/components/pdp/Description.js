import React from 'react';
import '../../Styles/description.css';

class Description extends React.PureComponent {
    selectAttribute(key) {
        console.log(key);
    }
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
                            return (
                                <p key={item.id} onClick={() => {this.selectAttribute(item.id)}}>
                                    {item.displayValue}
                                </p>
                            );
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
                    <h3>{productData.product.attributes[1].name} :</h3>
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
                <h3>{productData.product.attributes[0].name}:</h3>
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

        if (attributes > 2) {
            return this.renderAttributeAbove2();
        } else if (attributes > 1) {
            if (productData.product.id === 'apple-iphone-12-pro') {
                return this.renderAttributeIphone12();
            } else {
                return this.renderAttributeOf1();
            }
        } else if (attributes > 0) {
            return this.renderAttribute0();
        } else {
            return '';
        }
    }

    renderButtonInStock() {
        const { addToCart } = this.props;
        return (
            <div className="add-to-cart">
                <button onClick={addToCart}>Add to cart</button>
            </div>
        );
    }

    renderButtonOutStock() {
        return (
            <div className="outStock">
                <button>Add to cart</button>
            </div>
        );
    }
    render() {
        const { productData, currencyIndex } = this.props;

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
                {!productData.product.inStock
                    ? this.renderButtonOutStock()
                    : this.renderButtonInStock()}
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
