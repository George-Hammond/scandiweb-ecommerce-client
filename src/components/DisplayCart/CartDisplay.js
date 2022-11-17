import React from "react";


class CartDisplay extends React.PureComponent{
    render(){
        const { cartData, currencyIndex } = this.props
        
        const attributes = cartData.attributes.length;
        const displayDescription = () =>{
            if(attributes > 2){
                return(
                <>
                    <div className='cart-attributes-size-section greaterTwo'>
                        <h3>{cartData.attributes[0].name}</h3>
                        <div className='cart-attributes-size-category'>
                            {
                            cartData.attributes[0].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                        </div>                            
                    </div>
                    <div className='cart-attributes-size-section'>
                        <h3>{cartData.attributes[1].name}</h3>
                        <div className='cart-attributes-size-category'>
                            {
                            cartData.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                        </div>                            
                    </div>
                    <div className='cart-attributes-color-section'>
                        <h3>{cartData.attributes[2].name} :</h3>
                        <div className='cart-attributes-colors'>
                            {
                                cartData.attributes[2].items.map((item, index) => {
                                    return <p key={item.id} >{item.displayValue}</p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributes > 1){
                if(cartData.name ==="iPhone 12 Pro"){
                    return(
                        <>
                            <div className='cart-attributes-size-section'>
                                <h3>{cartData.attributes[0].name}</h3>
                                <div className='cart-attributes-size-category'>
                                    {
                                    cartData.attributes[0].items.map((item) => {
                                            return <p key={item.id}>{item.displayValue}</p>
                                        })
                                    }    
                                </div>
                            </div>
                            <div className='cart-attributes-color-section'>
                                <h3>Color:</h3>
                                <div className='cart-attributes-colors'>
                                    {
                                        cartData.attributes[1].items.map((item, index) => {
                                            return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                        })
                                    }                                                                                
                                </div>
                            </div>
                        </>
                        ) 
                } else if(cartData.name === "Nike Air Huarache Le"){
                    return(
                    <>
                        <div className='cart-attributes-size-section'>
                            <h3>{cartData.attributes}</h3>
                            <div className='cart-attributes-size-category'>
                                {
                                cartData.attributes[1].items.map((item) => {
                                        return <p key={item.id}>{item.displayValue}</p>
                                    })
                                } 
                            </div>
                        </div>
                        <div className='cart-attributes-color-section'>
                            <h3>Color:</h3>
                            <div className='cart-attributes-colors'>
                                {
                                    cartData.attributes[0].items.map((item, index) => {
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
                    <div className='cart-attributes-size-section'>
                        <h3>{cartData.attributes}</h3>
                        <div className='cart-attributes-size-category'>
                            {
                            cartData.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            } 
                        </div>
                    </div>
                    <div className='cart-attributes-color-section'>
                        <h3>Color:</h3>
                        <div className='cart-attributes-colors'>
                            {
                                cartData.attributes[0].items.map((item, index) => {
                                    return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributes > 0){
                    return(
                        <div className='cart-attributes-size-section'>
                            <h3>{cartData.attributes[0].name}</h3>
                            <div className='cart-attributes-size-category'>
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

        //Return
        return(
            <>
                <div className="cart-display-cart">
                    <div className="cart-attributes">
                        <h2>{cartData.brand}</h2>
                        <h3>{cartData.name}</h3>
                        <div className='cart-attributes-price-section'>                            
                            <p>{cartData.prices[currencyIndex].currency.symbol}{cartData.prices[currencyIndex].amount}</p>
                        </div>
                        {
                            displayDescription()
                        }
                    </div>
                    <div className="cart-attributes-product-quantity">
                        <div className="toggle-add">
                            <button id='increase'>+</button>
                            <p>1</p>
                            <button id="decrease">-</button>
                        </div>
                        <div className="cart-attributes-product-quantity-image">
                            <img src={cartData.gallery[0]} alt={cartData.name}/>
                            <div className="toggle-img">
                                <button id="lesser">&gt;</button>
                                <button id="greater">&lt;</button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </>
        )
    }
}

export default CartDisplay;