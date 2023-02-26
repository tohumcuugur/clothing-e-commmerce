import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

import { CardContext } from "../../contexts/card.context"

import Button from "../button/button.component"

import CardItem from "../card-item/card-item.component"

import { CardDropdownContainer, EmptyMessage, CardItems } from"./card-dropdown.styles.jsx"

const CardDropdown = () => {
    const { cardItems, isCardOpen, setIsCardOpen } = useContext(CardContext)
    const navigate = useNavigate();

    const checkOutHandler = () => {
        navigate("/checkout");
        setIsCardOpen(!isCardOpen);
    }
    return (
        <CardDropdownContainer>
            <CardItems>
                {
                    cardItems.length ? cardItems.map(item => (<CardItem key={item.id} cardItem={item} />))
                        : (<EmptyMessage>Your card is empty</EmptyMessage>)
                }
            </CardItems>
            <Button onClick={checkOutHandler}>GO TO CHECK OUT</Button>
        </CardDropdownContainer>
    )
}

export default CardDropdown;