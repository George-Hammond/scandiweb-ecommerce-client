import React from "react";
import { CURRENCY_QUERY } from '../../../graphQLQuery/cardQuery';
import { Query } from 'react-apollo';
import '../../../Styles/currencyChange.css';


class CurrencyChange extends React.PureComponent{
    render(){
        const { getCurrencyIndex } = this.props;
        return(
            <div className="select-currency" >
                <div className="currency-section">
                    <Query query={CURRENCY_QUERY}>
                    {
                        ({loading, error, data}) =>{
                            if(loading) return "";
                            if(error) return `Error :( ${error.message}`;

                            return(
                                data.currencies.map(item => {
                                    return (
                                    <p 
                                    key={item.symbol}
                                    onClick={()=>getCurrencyIndex(item.label)}
                                    ><span id="c-symbol">{item.symbol}</span>
                                    <span id="c-label">{item.label}</span></p>
                                    )
                                })
                            )
                        }
                    }
                        
                    </Query>
                </div>
            </div>
        )
    }
}
export default CurrencyChange;