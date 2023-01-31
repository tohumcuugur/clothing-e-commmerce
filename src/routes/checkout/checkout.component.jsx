import "./checkout.styles.scss"

import { useContext } from "react";

import { CardContext } from "../../contexts/card.context";



const CheckOut = () => {
    const { cardItems, addItemToCard, removeItemToCard } = useContext(CardContext)
    return (
        <div>
            <ul className="header">
                <li>Product</li>
                <li>Description</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Remove</li>
            </ul>
            <div className="card-items">
                {
                    cardItems.map((cardItem) => {
                        const { id, name, quantity } = cardItem;
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br />
                                <span onClick={() => removeItemToCard(cardItem)}>decrement</span>
                                <br />
                                <span onClick={() => addItemToCard(cardItem)}>increment</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )

}

export default CheckOut;
