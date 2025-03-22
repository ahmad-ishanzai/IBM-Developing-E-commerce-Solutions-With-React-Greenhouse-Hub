import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CartSummary from './components/CartSummary';
import CartManagementForm from './components/CartManagementForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <Header />
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <CartSummary />
                    </div>
                </div>
                <h2 className='mt-4'>Our Houseplants</h2>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ProductList />
                    </div>
                </div>
                <h2 className='mt-4'>Your Shopping Cart</h2>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ShoppingCart />
                    </div>
                </div>
                <h3 className='mt-4'>Manage Cart</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <CartManagementForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
