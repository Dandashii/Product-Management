import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import AddForm from "./Form";

export default class ProductAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageTitle: 'Product Add',
			currentPage: 'productAdd'
		}
	}
	render () {
		return (
			<>
				<Header pageTitle={this.state.pageTitle}
				        currentPage={this.state.currentPage}/>
				<AddForm/>
				<Footer/>
			</>
		);
	}
}