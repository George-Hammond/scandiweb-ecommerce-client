import React from 'react';
import '../../Styles/largeImage.css';

class LargeImage extends React.Component {
    render() {
        const { productData, galleryIndex } = this.props;
        return (
            <div className="large-product">
                <img
                    src={productData.product.gallery[galleryIndex]}
                    alt={productData.product}
                />
            </div>
        );
    }
}

export default LargeImage;
