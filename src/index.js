import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styling/index.sass';
import ProductList from "./pages/Home/App";
import ProductAdd from "./pages/AddProduct/App";

import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route index path="/" element={<ProductList />}/>
			<Route path="add-product" element={<ProductAdd />} />
		</Routes>
	</BrowserRouter>
);

