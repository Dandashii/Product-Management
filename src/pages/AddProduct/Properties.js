import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";

export default class AddProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render () {
		return (
			<div>
				<Header/>

				<Footer/>
			</div>
		);
	}
}