import React from 'react';
import '../../Styles/NavBar.css';
import GreenBag from '../../images/green-bag.svg';
import Cart from '../../images/cart.svg';
import ArrowDown from '../../images/arrowDown.svg';
import { NavLink } from 'react-router-dom';
import { Query } from 'react-apollo';
import { CURRENCY_QUERY } from '../../graphQLQuery/cardQuery';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isAllActive: true,
            isClothesActive: false,
            isTechActive: false,
            isArrowActive: false,
        };
        this.navClicked = this.navClicked.bind(this);
        this.arrowClicked = this.arrowClicked.bind(this);
        // this.goBack = this.goBack.bind(this)
    }

    navClicked = (event) => {
        const idTag = event.currentTarget;
        console.log(this.state);
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
            ? this.setState({ isArrowActive: true })
            : this.setState({ isArrowActive: false });
    };

    goBack = () => {
        window.history.back();
    };
    render() {
        const { isAllActive, isClothesActive, isTechActive, isArrowActive } =
            this.state;
        return (
            <nav>
                <div className="main-nav-container">
                    <div className="category-name">
                        <ul>
                            <NavLink to="/" id="all" onClick={this.navClicked}>
                                <span
                                    className={
                                        isAllActive ? 'activeClicked' : ''
                                    }
                                >
                                    All
                                </span>
                            </NavLink>
                            <NavLink
                                to="clothes"
                                id="clothes"
                                onClick={this.navClicked}
                            >
                                <span
                                    className={
                                        isClothesActive ? 'activeClicked' : ''
                                    }
                                >
                                    Clothes
                                </span>
                            </NavLink>
                            <NavLink
                                to="tech"
                                id="tech"
                                onClick={this.navClicked}
                            >
                                <span
                                    className={
                                        isTechActive ? 'activeClicked' : ''
                                    }
                                >
                                    Tech
                                </span>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="middle-logo">
                        <img
                            src={GreenBag}
                            alt="green bag logo" /*onClick={this.goBack}*/
                        />
                    </div>
                    <div className="actions">
                        <Query query={CURRENCY_QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return <div>Loading...</div>;

                                if (error)
                                    return <div>Error: {error.message}</div>;

                                return (
                                    <p id="currency-symbol">
                                        {data.currencies[1].symbol}
                                    </p>
                                );
                            }}
                        </Query>
                        <img
                            src={ArrowDown}
                            alt="more currencies"
                            id={
                                isArrowActive
                                    ? "arrow-up"
                                    : "arrow-down"
                            }
                            onClick={this.arrowClicked}
                        />
                        <img
                            src={Cart}
                            alt="Cart"
                            id="empty-cart-logo"
                            onClick={this.toggleCart}
                        />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
