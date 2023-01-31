import "./checkout.styles.scss"

import { useContext } from "react";

import { CardContext } from "../../contexts/card.context";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
    const { cardItems, addItemToCard, removeItemToCard } = useContext(CardContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                
                </div>
                <div className="header-block">
                    <span>Price</span>
                
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                    cardItems.map((cardItem) => (
                        <CheckOutItem key={cardItem.id} cardItem={cardItem}/>
                        ))
                }
                <span className="total">Total:0</span>
        </div>

    )

}

export default CheckOut;
