import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import Product from "./Product";

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//The properties for the navigation button in the header
			//Use redux to manage the shared states
			linkBtnClassName: 'add-link',
			linkBtnValue: 'ADD',
			linkBtnIcon: 'gridicons:create',
			linkBtnPage: 'productAdd',
			actionBtnClass: 'mass-delete',
			actionBtnValue: 'MASS DELETE',

			pageTitle: 'Product List'
		}
	}
	render () {
		return (
			<>
				<Header
					linkBtnClassName={this.state.linkBtnClassName}
					linkBtnValue={this.state.linkBtnValue}
					linkBtnIcon={this.state.linkBtnIcon}
					linkBtnPage={this.state.linkBtnPage}
					actionBtnClass={this.state.actionBtnClass}
					actionBtnValue={this.state.actionBtnValue}
					pageTitle={this.state.pageTitle}
				/>
				<Product/>
				<Footer/>
			</>
		);
	}
}