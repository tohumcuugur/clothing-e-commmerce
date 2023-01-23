import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss"

const CardIcon = () =>{
    return(
        <div className="card-icon-container">
            <ShoppingIcon/>
            <span className="item-count">0</span>
        </div>
    )


}

export default CardIcon;