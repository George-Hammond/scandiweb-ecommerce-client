import React from 'react';
import '../../Styles/card.css';
import { Link } from 'react-router-dom';
import GreenCart from './GreenCart';

class Card extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCardHovered: false,
        };
        this.handleProductMouseEnter = this.handleProductMouseEnter.bind(this);
        this.handleProductMouseLeave = this.handleProductMouseLeave.bind(this);
    }

    //Handles event when mouse enters around a product card
    handleProductMouseEnter() {
        this.setState({
            isCardHovered: true,
        });
    }

    //Handles event when mouse leaves around a product card
    handleProductMouseLeave() {
        this.setState({
            isCardHovered: false,
        });
    }

    renderCardInStock() {
        const { addToCart, getCardId, cardData, currencyIndex } = this.props;
        const { isCardHovered } = this.state;
        return (
            <div
                className="card-wrapper"
                onMouseEnter={this.handleProductMouseEnter}
                onMouseLeave={this.handleProductMouseLeave}
            >
                <div className="card-img-section">
                    <Link to={`/product/${cardData.id}`}>
                        <img
                            onClick={getCardId}
                            src={cardData.gallery[0]}
                            alt={cardData.name}
                            id="product-image"
                        />
                    </Link>
                    {isCardHovered ? (
                    <GreenCart
                        key={cardData.id}
                        addToCart={() =>
                            addToCart(
                                cardData.id,
                                cardData.prices[currencyIndex].amount
                            )
                        }
                    />
                    ) : (
                        ''
                    )}
                </div>
                <p id="product-name">{cardData.name}</p>
                <p id="product-price">
                    {cardData.prices[currencyIndex].currency.symbol}
                    {cardData.prices[currencyIndex].amount}
                </p>
            </div>
        );
    }

    renderCardOutStock() {
        const { addToCart, getCardId, cardData, currencyIndex } = this.props;
        const { isCardHovered } = this.state;
        return (
            <div className="card-wrapper out">
                <div className="card-img-section c-out">
                    <img
                        src={cardData.gallery[0]}
                        alt={cardData.name}
                        id="product-image"
                    />

                    {isCardHovered ? <GreenCart key={cardData.id} /> : ''}
                </div>
                <p id="product-name">{cardData.name}</p>
                <p id="product-price">
                    {cardData.prices[currencyIndex].currency.symbol}
                    {cardData.prices[currencyIndex].amount}
                </p>
                {!cardData.inStock && <p id="in-stock">Out of Stock</p>}
                <p id="oos-overlay"></p>
            </div>
        );
    }

    render() {
        const { cardData } = this.props;
        return (
            <>
                {!cardData.inStock
                    ? this.renderCardOutStock()
                    : this.renderCardInStock()}
            </>
        );
    }
}

export default Card;
