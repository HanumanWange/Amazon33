import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className='master_container'>
        <header className=''>
            <a className='amazon_logo' href='amazon.html'>amazon</a>
            <div className='sign_cart'>
                <a className='block' href="cart.html">Cart</a>
                <a className='block' href='signin.html'>SignIn</a>
            </div>
        </header>

        <main className=''>
        <div className='product_items_container'>
          {data.products.map(product=> (
            <Product product = {product}/>))}
        </div>
          
        </main>

        <footer className=''>
            <p>Developed by Hanuman Wange</p>

        </footer>
    </div>
  );
}

export default App;
