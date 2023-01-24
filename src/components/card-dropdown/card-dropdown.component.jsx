import Button from "../button/button.component"

import CardItem from "../card-item/card-item.component"

import "./card-dropdown.styles.scss"

const CardDropdown = () =>{

    return(
        <div className="card-dropdown-container">
            <div className="card-items">
                {[].map(item => <CardItem cardItem={item}/>)}
            </div>
            <Button>GO TO CHECK OUT</Button>
        </div>
    )


}

export default CardDropdown;