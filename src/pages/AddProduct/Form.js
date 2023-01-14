import ProductProperties from "./PropertiesForm";
import React from "react";
import axios from 'axios';

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

		const productData = {};
		Object.assign(productData, this.state);

		axios.post('http://localhost:8080/addProduct.php', productData)
			.then(response => {
				console.log(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}

	handleChange(event) {
		this.setState({ [event.target.name] : event.target.value });
	}

	changeProductType(event) {
		this.setState({
			type: event.target.value,
			properties: productProperties[event.target.name]
		});
	}

	handleProductProperties = (event) => {
		this.setState((previousState) => {
			let tempProperties = {...previousState.properties};
			tempProperties[event.target.name] = event.target.value;
			return {
				properties: tempProperties
			}
		});
	}

	render () {
		return (
			<form id={'product_form'} onSubmit={this.saveProduct}>
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



