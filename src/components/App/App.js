import React from 'react';
import '../../Styles/App.css';
import NavBar from '../NavigationBar/NavBar';
import CategoryName from '../Category/CategoryName/CategoryName';
import All from '../Category/All/All';
import Card from '../Card/Card';
import { BrowserRouter /*, Route, Routes */ } from 'react-router-dom';

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
                <All
                    currencyIndex={this.state.currencyIndex}
                    getCurrencyIndex={this.getCurrencyIndex}
                />
                {/* <Card /> */}
            </BrowserRouter>
        );
    }
}

export default App;
