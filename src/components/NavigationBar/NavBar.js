import React from 'react';
import '../../Styles/NavBar.css';
import GreenBag from '../../images/green-bag.svg';
import Cart from '../../images/cart.svg';
import ArrowDown from '../../images/arrowDown.svg';
import { NavLink } from 'react-router-dom';
import { Query } from 'react-apollo';
import { CURRENCY_QUERY } from '../../graphQLQuery/cardQuery';
import CurrencyChange from './currencyChange/CurrencyChange';
import CartDropdown from './cartDropdown/CartDropDown';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isAllActive: true,
            isClothesActive: false,
            isTechActive: false,
            isArrowActive: false,
            currencyChangeAppear: false,
            cartAppear: false,
        };

        this.navClicked = this.navClicked.bind(this);
        this.arrowClicked = this.arrowClicked.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        // this.goBack = this.goBack.bind(this)
    }

    navClicked = (event) => {
        const idTag = event.currentTarget;
        switch (idTag.id) {
            case 'all':
                this.setState({
                    isAllActive: true,
                    isClothesActive: false,
                    isTechActive: false,
                });
                break;

            case 'clothes':
                this.setState({
                    isAllActive: false,
                    isClothesActive: true,
                    isTechActive: false,
                });
                break;

            case 'tech':
                this.setState({
                    isAllActive: false,
                    isClothesActive: false,
                    isTechActive: true,
                });
                break;

            default:
                this.setState({
                    isAllActive: true,
                    isClothesActive: false,
                    isTechActive: false,
                });
        }
    };

    arrowClicked = () => {
        const { isArrowActive } = this.state;
        !isArrowActive
            ? this.setState({
                  isArrowActive: true,
                  currencyChangeAppear: true,
              })
            : this.setState({
                  isArrowActive: false,
                  currencyChangeAppear: false,
              });
    };

    toggleCart = () => {
        const { cartAppear } = this.state;
        !cartAppear
            ? this.setState({ cartAppear: true })
            : this.setState({ cartAppear: false });
    };

    // goBack = () => {
    //     window.history.back();
    // };

    renderNavLinks() {
        const { isAllActive, isClothesActive, isTechActive } = this.state;
        return (
            <ul>
                <NavLink to="/" id="all" onClick={this.navClicked}>
                    <span className={isAllActive ? 'activeClicked' : ''}>
                        All
                    </span>
                </NavLink>
                <NavLink to="clothes" id="clothes" onClick={this.navClicked}>
                    <span className={isClothesActive ? 'activeClicked' : ''}>
                        Clothes
                    </span>
                </NavLink>
                <NavLink to="tech" id="tech" onClick={this.navClicked}>
                    <span className={isTechActive ? 'activeClicked' : ''}>
                        Tech
                    </span>
                </NavLink>
            </ul>
        );
    }

    renderImageBag() {
        return (
            <img
                src={GreenBag}
                alt="green bag logo"
                /*onClick={this.goBack}*/
            />
        );
    }

    renderCurrencyLogo() {
        const { currencyIndex } = this.props;
        return (
            <Query query={CURRENCY_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;

                    if (error) return <div>Error: {error.message}</div>;

                    return (
                        <p id="currency-symbol" onClick={this.arrowClicked}>
                            {data.currencies[currencyIndex].symbol}
                        </p>
                    );
                }}
            </Query>
        );
    }

    renderArrow() {
        const { isArrowActive } = this.state;
        return (
            <img
                src={ArrowDown}
                alt="more currencies"
                id={isArrowActive ? 'arrow-up' : 'arrow-down'}
                onClick={this.arrowClicked}
            />
        );
    }

    renderEmptyCartLogo() {
        return (
            <img
                src={Cart}
                alt="Cart"
                id="empty-cart-logo"
                onClick={this.toggleCart}
            />
        );
    }
    render() {
        const { currencyChangeAppear } = this.state;

        const {
            getCurrencyIndex,
            cartItems,
            currencyIndex,
            sumProductPrice,
            increaseProduct,
            decreaseProduct,
            setProductQuantity,
        } = this.props;
        return (
            <nav>
                <div className="main-nav-container">
                    <div className="category-name">{this.renderNavLinks()}</div>
                    <div className="middle-logo">{this.renderImageBag()}</div>
                    <div className="actions">
                        {this.renderCurrencyLogo()}
                        {this.renderArrow()}
                        {this.renderEmptyCartLogo()}
                        {cartItems.length > 0 ? (
                            <p id="number-in-cart">{cartItems.length}</p>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                {currencyChangeAppear && (
                    <CurrencyChange getCurrencyIndex={getCurrencyIndex} />
                )}
                {this.state.cartAppear && (
                    <CartDropdown
                        toggleCart={this.toggleCart}
                        cartItems={cartItems}
                        currencyIndex={currencyIndex}
                        sumProductPrice={sumProductPrice}
                        increaseProduct={increaseProduct}
                        decreaseProduct={decreaseProduct}
                        setProductQuantity={setProductQuantity}
                    />
                )}
                {this.state.cartAppear && (
                    <div
                        className="overlay-appear"
                        onClick={this.toggleCart}
                    ></div>
                )}
            </nav>
        );
    }
}

export default NavBar;
