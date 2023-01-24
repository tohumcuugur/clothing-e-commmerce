import "./card-item.styles.scss"

const CardItem = ({ cardItem }) => {
    const { name, quantity } = cardItem;
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}
export default CardItem;