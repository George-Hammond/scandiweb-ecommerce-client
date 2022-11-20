import React from 'react';
import LargeImage from './LargeImage';
import DifferentImages from './DifferentImages';
import Description from './Description';
import '../../Styles/allTogether.css';

class AllTogetherPDP extends React.PureComponent {
    
    render() {
        const { productData, addToCart, id, currencyIndex } = this.props;

        return (
            <div className="alltogether">
                <DifferentImages productData={productData} />
                <div className="LD-combined">
                    <LargeImage productData={productData} />
                    <Description
                        productData={productData}
                        addToCart={() => addToCart(id)}
                        currencyIndex={currencyIndex}
                    />
                </div>
            </div>
        );
    }
}

export default AllTogetherPDP;
