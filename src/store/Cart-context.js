import { createContext, useState } from "react";

const CartContext = createContext({
    Cart: [],
    totalCart: 0,
    addProduct: (ProductProduct) => {},
    removeProduct: (ProductId) => {},
    itemIsAdded: (ProductId) => {}

});

export function CartContextProvider(props) {

    const [userCart, setUserCart] = useState([])

    function addProductHandler(ProductProduct) {
        setUserCart((prevUserCart) => {
            return prevUserCart.concat(ProductProduct);
       
        });
    }

    function removeProductHandler(ProductId) {
        setUserCart(prevUserCart => {
            return prevUserCart.filter(Product => Product.id !== ProductId);
        });
    }

    function ItemIsAddedHandler(ProductId) {
        return userCart.some(Product => Product.id === ProductId);
    }

    const context = {
        Cart: userCart,
        totalCart: userCart.length,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        itemIsAdded: ItemIsAddedHandler,
    };

    return ( <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
    );
}


export default CartContext;