import React from "react";

class CartDropdownItems extends React.Component{
    render(){
        const  { cartData, currencyIndex } = this.props;
        
        const attributesLength = cartData.attributes.length;
        const displayDescription = () =>{
            if(attributesLength > 2){
                return(
                <>
                    <div className='cart-dropdown-capacity-section '>
                        <h3>{cartData.attributes[0].name} :</h3>
                        <div className='cart-dropdown-capacity-category'>
                            {
                            cartData.attributes[0].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                        </div>                            
                    </div>                    
                    <div className='cart-dropdown-touchId-section'>
                        <h3>{cartData.attributes[2].name} :</h3>
                        <div className='cart-dropdown-touchId'>
                            {
                                cartData.attributes[2].items.map((item, index) => {
                                    return <p key={item.id} >{item.displayValue}</p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributesLength > 1){
                if(cartData.name ==="iPhone 12 Pro"){
                    return(
                        <>
                            <div className='cart-dropdown-size-section'>
                                <h3>{cartData.attributes[0].name} :</h3>
                                <div className='cart-dropdown-size-category'>
                                    {
                                    cartData.attributes[0].items.map((item) => {
                                            return <p key={item.id}>{item.displayValue}</p>
                                        })
                                    }    
                                </div>
                            </div>
                            <div className='cart-dropdown-color-section'>
                                <h3>{cartData.attributes[1].name}:</h3>
                                <div className='cart-dropdown-colors'>
                                    {
                                        cartData.attributes[1].items.map((item, index) => {
                                            return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                        })
                                    }                                                                                
                                </div>
                            </div>
                        </>
                        ) 
                }
                return(
                <>
                    <div className='cart-dropdown-size-section'>
                        <h3>{cartData.attributes[1].name} :</h3>
                        <div className='cart-dropdown-size-category'>
                            {
                            cartData.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            } 
                        </div>
                    </div>
                    <div className='cart-dropdown-color-section'>
                        <h3>Color:</h3>
                        <div className='cart-dropdown-colors'>
                            {
                                cartData.attributes[0].items.map((item, index) => {
                                    return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributesLength > 0){
                    return(
                        <div className='cart-dropdown-size-section'>
                            <h3>{cartData.attributes[0].name} :</h3>
                            <div className='cart-dropdown-size-category'>
                                {
                                cartData.attributes[0].items.map((item) => {
                                        return <p key={item.id}>{item.value}</p>                                        
                                    })
                                }     
                            </div>
                        </div>
                    )
            } else{
                return("")
            } 
        }
        return(
            <div className="cart-dropdown">                
                <div className="cart-dropdown-attribute">
                    <h2>{cartData.brand}</h2>
                    <h3>{cartData.name}</h3>
                    <div className='cart-attributes-price-section'>                            
                        <p>{cartData.prices[currencyIndex].currency.symbol}{cartData.prices[currencyIndex].amount}</p>
                    </div>
                    {
                        displayDescription()
                    }
                </div>
                <div className="cart-dropdown-product-quantity">
                        <div className="dropdown-toggle-add">
                            <button id='increase'>+</button>
                            <p>1</p>
                            <button id="decrease">-</button>
                        </div>
                        <div className="cart-dropdown-product-quantity-image">
                            <img src={cartData.gallery[0]} alt={cartData.name}/>                           
                        </div>                        
                    </div>
            </div>
        )
    }
}

export default CartDropdownItems;

// 