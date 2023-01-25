import { createContext, useState } from "react";

const addCardItem = (cardItems, productToAdd) => {
    const existingCardItem = cardItems.find(
        (cardItem) => cardItem.id === productToAdd.id
    );
    if (existingCardItem) {
        return cardItems.map((cardItem) => cardItem.id === productToAdd.id
            ? { ...cardItem, quantity: cardItem.quantity + 1 }
            : cardItem
        )
    }

    return [...cardItems, { ...productToAdd, quantity: 1 }];
}

export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => { },
    cardItems: [],
    addItemToCard: () => { },
})

export const CardProvider = ({ children }) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cardItems, setCardItems] = useState([]);

    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    };

    const value = { isCardOpen, setIsCardOpen, cardItems, addItemToCard };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}