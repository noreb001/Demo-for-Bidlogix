import { useContext } from 'react';
import classes from './Products.module.css';
import Card from '../ui/Card';
import CartContext from '../../store/Cart-context';

function Products(props) {
    const CartCtx = useContext(CartContext);
    const ItemIsAdded = CartCtx.itemIsAdded(props.id);

    function toggleCartStatusHandle() {
       if (ItemIsAdded){
           CartCtx.removeProduct(props.id);
       } else {
           CartCtx.addProduct( {
               id: props.id,
               title: props.title,
               image: props.image,
               price: props.price
           })
       }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title} </h3>
                    <p>${props.price}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleCartStatusHandle}>{ItemIsAdded ? 'Remove from Cart' : 'Add To Cart'}</button>
                    <a href={props.image} target="_blank" rel="noopener noreferrer">
                    <button >{'View'}</button>
                    </a>
                </div>
               
                
            </Card>
        </li>
    );
}

export default Products;