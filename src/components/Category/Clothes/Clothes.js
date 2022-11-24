import React from 'react';
import Card from '../../Card/Card';
import CategoryName from '../CategoryName/CategoryName';
import { ENTRYPOINT_CATEGORY } from '../../../graphQLQuery/cardQuery';
import { Query } from 'react-apollo';

const bigTitle = {
    title: 'clothes',
};

class Clothes extends React.PureComponent {
    renderCategoryName() {
        return (
            <Query query={ENTRYPOINT_CATEGORY} variables={{ input: bigTitle }}>
                {({ loading, error, data }) => {
                    if (loading) return <div></div>;
                    if (error) return <div>Error... {error.message}</div>;

                    return <CategoryName categoryName={data} />;
                }}
            </Query>
        );
    }

    renderCard() {
        const { getCardId, addToCart, currencyIndex } = this.props;
        return (
            <div className="category-cardWrapper">
                <Query
                    query={ENTRYPOINT_CATEGORY}
                    variables={{ input: bigTitle }}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <div>Loading...</div>;

                        if (error) return <div>Error: {error.message}</div>;
                        return data.category.products.map((cardData, index) => (
                            <Card
                                key={cardData.id}
                                cardData={cardData}
                                getCardId={() => getCardId(cardData.id)}
                                addToCart={() =>
                                    addToCart(
                                        cardData.id,
                                        data.category.products[index].prices[
                                            currencyIndex
                                        ].amount
                                    )
                                }
                                currencyIndex={currencyIndex}
                            />
                        ));
                    }}
                </Query>
            </div>
        );
    }
    render() {
        return (
            <>
                {this.renderCategoryName()}
                {this.renderCard()}
            </>
        );
    }
}

export default Clothes;
