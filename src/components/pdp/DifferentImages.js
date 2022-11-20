import React from 'react';
import '../../Styles/differentImages.css';

class DifferentImages extends React.PureComponent {
    render() {
        const { productData } = this.props;
        return (
            <div className="different-product">
                {productData.product.gallery.map((data, index) => {
                    return (
                        <img
                            key={index}
                            src={data}
                            alt={productData.product.name}
                        />
                    );
                })}
            </div>
        );
    }
}

export default DifferentImages;
