import {Route, Switch} from 'react-router-dom';
import AllProductsPage from './pages/AllProducts';
import CartPage from './pages/Cart';
import Layout from './components/layout/Layout';


function App() {
  return (
  
    <Layout>
    <Switch>
   <Route path='/' exact>
     <AllProductsPage/>
   </Route>
   <Route path='/Cart'>
     <CartPage/>
   </Route>
   </Switch>
   </Layout>
  );
}

export default App;
