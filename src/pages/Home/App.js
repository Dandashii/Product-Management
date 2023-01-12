import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import Product from "./Product";

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageTitle: 'Product List',
			currentPage: 'productList'
		}
	}
	render () {
		return (
			<>
				<Header pageTitle={this.state.pageTitle}
				        currentPage={this.state.currentPage}/>
				<Product/>
				<Footer/>
			</>
		);
	}
}