import React from 'react';
import AllTogetherPDP from './AllTogetherPDP';
import { Query } from 'react-apollo';
import { PRODUCT_SELECTION } from '../../graphQLQuery/cardQuery';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryIndex: 0,
        };

        this.grabKey = this.grabKey.bind(this);
    }

    grabKey = (e) => {
        const gallIndex = e.target.id;
        this.setState({
            galleryIndex: gallIndex,
        });
    };
    render() {
        const { id, addToCart, currencyIndex } = this.props;
        return (
            <div className="product-page-section">
                <Query
                    query={PRODUCT_SELECTION}
                    variables={{ productId: `${id}` }}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <div>Loading...</div>;
                        if (error) return <div>Error: {error.message}</div>;

                        return (
                            <AllTogetherPDP
                                productData={data}
                                addToCart={() => {
                                    addToCart(
                                        id,
                                        data.product.prices[currencyIndex]
                                            .amount
                                    );
                                }}
                                currencyIndex={currencyIndex}
                                galleryIndex={this.state.galleryIndex}
                                grabKey={this.grabKey}
                            />
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default ProductPage;
