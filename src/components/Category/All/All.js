import React from 'react';
import CategoryName from '../CategoryName/CategoryName';
import { Query } from 'react-apollo';
import Card from '../../Card/Card';
import { ENTRYPOINT_CATEGORY } from '../../../graphQLQuery/cardQuery';

const bigTitle = {
    title: 'all',
};

export default class All extends React.PureComponent {
    render() {
        const { getCardId, addToCart, currencyIndex } = this.props;

        return (
            <div className="appear disappear">
                <Query
                    query={ENTRYPOINT_CATEGORY}
                    variables={{ input: bigTitle }}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <div></div>;
                        if (error) return <div>Error: {error.message}</div>;
                        
                        return <CategoryName categoryName={data} />;
                    }}
                </Query>
                <div className="category-cardWrapper">
                    <Query
                        query={ENTRYPOINT_CATEGORY}
                        variables={{ input: bigTitle }}
                    >
                        {({ loading, error, data }) => {
                            if (loading) return <div>Loading...</div>;

                            if (error) return <div>Error: {error.message}</div>;

                            return data.category.products.map((cardData) => (
                                <Card
                                    key={cardData.id}
                                    cardData={cardData}
                                    getCardId={() => getCardId(cardData.id)}
                                    addToCart={() =>
                                        addToCart(
                                            cardData.id,
                                            cardData.prices[currencyIndex]
                                                .amount
                                        )
                                    }
                                    currencyIndex={currencyIndex}
                                />
                            ));
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}
