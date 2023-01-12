import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import AddForm from "./Form";

export default class ProductAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//The properties for the navigation button in the header
			//Use redux to manage the shared states
			linkBtnClassName: 'cancel-btn',
			linkBtnValue: 'CANCEL',
			linkBtnIcon: 'material-symbols:save',
			linkBtnPage: '',
			actionBtnClass: 'save-product-btn',
			actionBtnValue: 'SAVE',

			pageTitle: 'Product Add'
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
				<AddForm/>
				<Footer/>
			</>
		);
	}
}