import ProductItem from './Products';
import classes from './ProductsList.module.css';

function ProductList(props) {
  return ( 
  <ul className={classes.list}>
      {props.Products.map((Product) => ( 
      <ProductItem 
         // key={Product.key} //to not have an error react needs a key when mapping 
          id={Product.id} 
          image={Product.image} 
          title={Product.title}
          price={Product.price} 
          />
          ))}
  </ul> 
  );

}


export default ProductList;