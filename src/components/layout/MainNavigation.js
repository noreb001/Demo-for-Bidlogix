import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';

function MainNavigation() {
    const CartCtx = useContext(CartContext);

    return <header className={classes.header}>
        <div className={classes.logo}> Art Institute of Chicago</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Products</Link>
                </li>
                <li>
                    <Link to='/Cart'>Cart 
                    <span className={classes.badge}>{CartCtx.totalCart} </span> 
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
};
export default MainNavigation;