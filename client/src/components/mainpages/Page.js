import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailProduct/DetailProduct';
import Cart from './cart/Cart';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './utils/not_found/NotFound';



function Page() {
    return (
        <Switch>
            <Route path='/' exact component = {Products} />
            <Route path = '/detail/:id' exact component = {DetailProduct} />
            <Route path='/login' exact component = {Login} />
            <Route path='/register' exact component = {Register} />
            <Route path='/cart' exact component = {Cart} />

            <Route path='*' exact component = {NotFound}></Route>
        </Switch>
        
    )
}

export default Page
