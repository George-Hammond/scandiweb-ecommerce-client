import React from 'react';
import '../../Styles/App.css';
import NavBar from '../NavigationBar/NavBar';
import CategoryName from '../Category/CategoryName/CategoryName';
import All from '../Category/All/All';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Clothes from '../Category/Clothes/Clothes';
import Tech from '../Category/Tech/Tech';

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currencyIndex: 0,
        };

        this.getCurrencyIndex = this.getCurrencyIndex.bind(this);
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
    render() {
        return (
            <BrowserRouter>
                <NavBar
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
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

                    {/* <Route
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
                    /> */}
                </Routes>
                {/* <All
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
                /> */}
                {/* <Clothes
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
                /> */}
                {/* <Tech
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
                /> */}
            </BrowserRouter>
        );
    }
}

export default App;
