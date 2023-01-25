import { useContext } from "react";

import { CardContext } from "../../contexts/card.context";

import Button from "../button/button.component";

import "./product-card.styles.scss"


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCard } = useContext(CardContext);

    const addProductToCard = () => addItemToCard(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCard} >Add to card</Button>
        </div>

    )


}

export default ProductCard;