import { useContext } from 'react';
import ProductList from '../components/Products/ProductsList';

import CartContext from '../store/Cart-context';

function CartPage(){
    const CartCtx = useContext(CartContext);

    let content;

    if (CartCtx.totalCart === 0) {
        content = <p>You have nothing in your Cart yet!</p>
    } else {
        content = <ProductList Products={CartCtx.Cart}/>
    }

    return (
        <section>
            <h2>My Cart</h2>
            {content}
        </section>

    )
}

export default CartPage;