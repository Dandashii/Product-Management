import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styling/index.css';
import ProductList from "./pages/Home/App";

const products = ReactDOM.createRoot(document.querySelector('#root'));

products.render(
    <ProductList/>
);

