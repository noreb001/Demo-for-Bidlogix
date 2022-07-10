import ProductList from "../components/Products/ProductsList";
import classes from '../components/ui/buttons.module.css';
import { useState, useEffect } from "react";
import { getArtworksPage} from '../controller/art'
     
function AllProductsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProducts, setLoadedProducts] = useState([]); 
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => { 
        setIsLoading(true);
        let limit = 10
            getArtworksPage( 
                pageNum ,
                limit 
                 
            ).then(data => {
            const Products = [];

            for (const key in data.data ) {
                const Product ={
                    id: data.data[key].id,
                    title: data.data[key].title,
                    image: data.data[key].image_url,
                    description: data.data[key].description,
                    price: data.data[key].max_current_price               
                };
                Products.push(Product);
            }
            
            setIsLoading(false)
            setLoadedProducts(Products);
        }
            );

        
    }, [pageNum]);

    
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return <section>
        <h2>Products</h2>
        <ProductList Products={loadedProducts}/>
        <div className={classes.nav}>
        <p>Current Page: {pageNum}</p>
        <button onClick={() => pageNum == 1 ? setPageNum(1): setPageNum(pageNum - 1) }>Previous page</button> 
        <button onClick={() => setPageNum(pageNum + 1)}>Next page</button>
        </div>
        
        
    </section>
}

export default AllProductsPage;