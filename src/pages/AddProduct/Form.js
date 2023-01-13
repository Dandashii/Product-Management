import ProductProperties from "./PropertiesForm";
import React from "react";

const productProperties = {
	'DVD': {
		size: 0
	},
	'Book': {
		weight: 0
	},
	'Furniture': {
		height: 0,
		width: 0,
		length: 0
	}
}

export default class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sku: '',
			name: '',
			price: '',
			type: '',
			properties: {}
		}

		this.changeProductType = this.changeProductType.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleProductProperties = this.handleProductProperties.bind(this);
		this.saveProduct = this.saveProduct.bind(this);
	}

	saveProduct(event) {
		event.preventDefault();

		console.log(this.state);
	}

	handleChange(event) {
		this.setState({ [event.target.name] : event.target.value });
	}
	changeProductType(event) {
		this.setState({
			type: event.target.value,
			properties: productProperties[this.state.type]});
	}

	handleProductProperties(event) {
		let currentProperties = {};
		for(const property in productProperties[this.state.type]) {
			currentProperties[property] = event.target.value;
		}

		this.setState({
			properties: Object.assign(currentProperties)
		});
	}
	render () {
		return (
			<form id={'product_form'} method={'POST'} action={'./'} onSubmit={this.saveProduct}>
				<div className={'main-input'}>
					<label htmlFor="sku">SKU (#)</label>
					<input type="text" onChange={this.handleChange} name={'sku'} id={'sku'}
					       placeholder={'Please provide the SKU ID of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="name">NAME</label>
					<input type="text" onChange={this.handleChange} name={'name'} id={'name'}
					       placeholder={'Please provide the name of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="price">PRICE ($)</label>
					<input type="number" onChange={this.handleChange} name={'price'} id={'price'}
					       placeholder={'Please provide the price of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="productType">TYPE SWITCHER</label>
					<select value={this.state.type} name="type" id="productType"
					        onChange={this.changeProductType}>
						<option value="" disabled hidden>Choose the type of product</option>
						<option id="DVD" value="DVD">DVD</option>
						<option id="Book" value="Book">Book</option>
						<option id="Furniture" value="Furniture">Furniture</option>
					</select>
				</div>

				<ProductProperties type={this.state.type} onChange={this.handleProductProperties}/>
			</form>
		);
	}
}




