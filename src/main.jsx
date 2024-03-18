import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer, { fetchUserData } from './component/userSlice.jsx';
import { productsApi } from './component/productsApi.jsx';
import cartReducer, { getTotals } from './component/cartSlice.jsx';

const store=configureStore({
    reducer:{
       user:userReducer,
       cart:cartReducer,
       [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware:(getDefaultMiddleWare)=>
     getDefaultMiddleWare().concat(productsApi.middleware),
    
})
store.dispatch(fetchUserData());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
         <App />
    </Provider>
);
