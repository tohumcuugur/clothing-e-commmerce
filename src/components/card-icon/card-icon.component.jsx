import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CardContext } from "../../contexts/card.context";

import "./card-icon.styles.scss"

const CardIcon = () => {
    const { isCardOpen ,setIsCardOpen } = useContext(CardContext);

    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);

    return (
        <div className="card-icon-container" onClick={toggleIsCardOpen}>
            <ShoppingIcon />
            <span className="item-count">0</span>
        </div>
    )
}

export default CardIcon;