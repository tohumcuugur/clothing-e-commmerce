import { useContext } from "react"

import { CardContext } from "../../contexts/card.context"

import Button from "../button/button.component"

import CardItem from "../card-item/card-item.component"

import "./card-dropdown.styles.scss"

const CardDropdown = () =>{
    const {cardItems} = useContext(CardContext)
    return(
        <div className="card-dropdown-container">
            <div className="card-items">
                {cardItems.map(item => <CardItem key={item.id} cardItem={item}/>)}
            </div>
            <Button>GO TO CHECK OUT</Button>
        </div>
    )
}

export default CardDropdown;