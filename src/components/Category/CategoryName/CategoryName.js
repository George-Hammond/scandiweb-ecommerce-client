import React from 'react';
import '../../../Styles/categoryname.css';

class CategoryName extends React.PureComponent {
    render() {
        const { categoryName } = this.props;
        return <h2 id="category-title">{categoryName.category.name}</h2>;
    }
}

export default CategoryName;
