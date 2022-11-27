import React from 'react';
import '../../Styles/App.css';
import NavBar from '../NavigationBar/NavBar';
import All from '../Category/All/All';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clothes from '../Category/Clothes/Clothes';
import Tech from '../Category/Tech/Tech';
import Cart from '../DisplayCart/Cart';
import ProductPage from '../pdp/ProductPage';

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currencyIndex: 0,
            cartItems: [],
            productItemAmount: [],
            sumProductPrice: 0,
            id: localStorage.getItem('key'),
            setProductQuantity: 1,
        };

        this.getCurrencyIndex = this.getCurrencyIndex.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.getCardId = this.getCardId.bind(this);
        this.increaseProduct = this.increaseProduct.bind(this);
        this.decreaseProduct = this.decreaseProduct.bind(this);
    }

    // Handle currency change
    getCurrencyIndex(key) {
        switch (key) {
            case 'USD':
                this.setState({
                    currencyIndex: 0,
                });
                break;
            case 'GBP':
                this.setState({
                    currencyIndex: 1,
                });
                break;
            case 'AUD':
                this.setState({
                    currencyIndex: 2,
                });
                break;
            case 'JPY':
                this.setState({
                    currencyIndex: 3,
                });
                break;
            case 'RUB':
                this.setState({
                    currencyIndex: 4,
                });
                break;
            default:
                this.setState({
                    currencyIndex: 0,
                });
        }
    }

    //Handle setting PDP id in Routing.
    getCardId = (key) => {
        localStorage.setItem('key', key);
        const storageKey = localStorage.getItem('key');
        this.setState({ id: storageKey });
    };

    //Handles event when green cart logo is clicked
    addToCart(key, amount) {
        const { cartItems, productItemAmount } = this.state;
        const isProductPresent = cartItems.some((item) => item === key);
        if (!isProductPresent) {
            this.setState({
                cartItems: [...cartItems, key],
            });
        }
        this.setState({
            productItemAmount: [...productItemAmount, amount],
        });

        let productSum = productItemAmount
            .reduce((prevValue, currValue) => prevValue + currValue, amount)
            .toFixed(2);
        let calculateTax = productSum * 0.21;
        let rounded = calculateTax.toFixed(2);
        this.setState({
            sumProductPrice: productSum,
            tax: rounded,
        });
    }

    // Handles quantity increase
    increaseProduct() {
        const { setProductQuantity } = this.state;
        this.setState({
            setProductQuantity: setProductQuantity + 1,
        });
    }
    // Handles quantity decrease
    decreaseProduct() {
        const { setProductQuantity } = this.state;
        setProductQuantity > 1
            ? this.setState({
                  setProductQuantity: setProductQuantity - 1,
              })
            : this.setState({
                  setProductQuantity: 1,
              });
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
                    cartItems={this.state.cartItems}
                    sumProductPrice={this.state.sumProductPrice}
                    increaseProduct={this.increaseProduct}
                    decreaseProduct={this.decreaseProduct}
                    setProductQuantity={this.state.setProductQuantity}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <All
                                getCardId={this.getCardId}
                                addToCart={this.addToCart}
                                currencyIndex={this.state.currencyIndex}
                            />
                        }
                    />

                    <Route
                        path="/clothes"
                        element={
                            <Clothes
                                getCardId={this.getCardId}
                                addToCart={this.addToCart}
                                currencyIndex={this.state.currencyIndex}
                            />
                        }
                    />

                    <Route
                        path="/tech"
                        element={
                            <Tech
                                getCardId={this.getCardId}
                                addToCart={this.addToCart}
                                currencyIndex={this.state.currencyIndex}
                            />
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={this.state.cartItems}
                                currencyIndex={this.state.currencyIndex}
                                sumProductPrice={this.state.sumProductPrice}
                                tax={this.state.tax}
                                productItemAmount={this.state.productItemAmount}
                            />
                        }
                    />

                    <Route
                        path="/product/:productId"
                        element={
                            <ProductPage
                                id={this.state.id}
                                addToCart={this.addToCart}
                                currencyIndex={this.state.currencyIndex}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
