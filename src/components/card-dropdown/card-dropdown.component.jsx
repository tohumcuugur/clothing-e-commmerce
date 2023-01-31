import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

import { CardContext } from "../../contexts/card.context"

import Button from "../button/button.component"

import CardItem from "../card-item/card-item.component"

import "./card-dropdown.styles.scss"

const CardDropdown = () => {
    const { cardItems } = useContext(CardContext)
    const navigate = useNavigate();

    const checkOutHandler = () =>{
        navigate("/checkout");
    }
    return (
        <div className="card-dropdown-container">
            <div className="card-items">
                {cardItems.map(item => <CardItem key={item.id} cardItem={item} />)}
            </div>
            <Button onClick={checkOutHandler}>GO TO CHECK OUT</Button>
        </div>
    )
}

export default CardDropdown;