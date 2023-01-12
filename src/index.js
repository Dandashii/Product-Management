import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styling/index.css';
import ProductList from "./pages/Home/App";
import ProductAdd from "./pages/AddProduct/App";

import {BrowserRouter, Route, Routes} from "react-router-dom";

const homePage = ReactDOM.createRoot(document.querySelector('#root'));

homePage.render(
	<BrowserRouter>
		<Routes>
			<Route index path="/" element={<ProductList />}/>
			<Route path="productAdd" element={<ProductAdd />} />
		</Routes>
	</BrowserRouter>
);

