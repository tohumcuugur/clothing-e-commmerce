import "./checkout-item.styles.scss"

const CheckOutItem = ({cardItem}) =>{
    const {name,imageUrl,price,quantity} = cardItem;

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10060;</div>
        </div>
    )

}

export default CheckOutItem;

// <div key={id}>
// <h2>{name}</h2>
// <span>{quantity}</span>
// <br />
// <span onClick={() => removeItemToCard(cardItem)}>decrement</span>
// <br />
// <span onClick={() => addItemToCard(cardItem)}>increment</span>
// </div>