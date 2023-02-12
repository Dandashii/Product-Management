import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import axios from "axios";
import Notification from "./Notification";
import Properties from "./Properties";
import '../../assets/styling/pages/addProduct/_addproduct.sass';

class ProductAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageTitle: 'Product Add',
			currentPage: 'productAdd',
			sku: '',
			name: '',
			price: '',
			type: '',
			properties: {},
			error: {
				target: '',
				type: '',
				desc: '',
				display: false
			}
		}

		this.clearStates = this.clearStates.bind(this);
		this.changeProductType = this.changeProductType.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleProductProperties = this.handleProductProperties.bind(this);
		this.saveProduct = this.saveProduct.bind(this);
	}

	clearStates() {
		this.setState({
			sku: '',
			name: '',
			price: '',
			type: '',
			properties: {},
			error: {
				target: '',
				type: '',
				desc: '',
				display: false
			}
		})
	}

	saveProduct(event) {
		event.preventDefault();
		const {sku, name, price, type, properties} = this.state;

		if(isEmpty(sku) || isEmpty(name) || isEmpty(type) || isEmpty(price) || isPropertyEmpty(properties)) {
			this.setState({
				error: {
					target: 'ALL',
					type: 'Missing Values',
					desc: 'Please, submit the required values!',
					display: true,
				}
			});
		} else {
			axios.post('http://localhost:8080/addProduct.php', {
				sku: sku,
				name: name,
				price: price,
				type: type,
				properties: properties
			}).then(response => {
				if (response.data.error) {
					this.setState({
						error: {
							target: response.data.error.target,
							type: response.data.error.type,
							desc: response.data.error.desc,
							display: true,
						}
					});
				} else {
					this.clearStates();
					event.target.reset();
				}
			}).catch(error => {
				console.error(error);
			});
		}
	}

	handleChange(event) {
		this.setState({ [event.target.name] : event.target.value });
	}

	changeProductType(event) {
		this.setState({
			type: event.target.value,
			properties: productProperties[event.target.value]
		});
	}

	handleProductProperties = (event) => {
		this.setState((previousState) => {
			let properties = {...previousState.properties};
			properties[event.target.name] = event.target.value;
			return {
				properties
			}
		});
	}

	componentWillUnmount() {
		this.clearStates();
	}

	render () {
		return (
			<>
				<Header pageTitle={this.state.pageTitle}
				        currentPage={this.state.currentPage}/>

				<form id={'product_form'} onSubmit={this.saveProduct}>
					<div className={'main-input'}>
						<div className={'label-container'}>
							<label htmlFor="sku">SKU (#)</label>
						</div>
						<input type="text" onChange={this.handleChange} name={'sku'} id={'sku'} required={true}
						       placeholder={'Please provide the SKU ID of the product'} />
					</div>

					<div className={'main-input'}>
						<div className={'label-container'}>
							<label htmlFor="name">NAME</label>
						</div>
						<input type="text" onChange={this.handleChange} name={'name'} id={'name'} required={true}
						       placeholder={'Please provide the name of the product'} />
					</div>

					<div className={'main-input'}>
						<div className={'label-container'}>
							<label htmlFor="price">PRICE ($)</label>
						</div>
						<input type="number" onChange={this.handleChange} name={'price'} id={'price'}
						       placeholder={'Please provide the price of the product'} />
					</div>

					<div className={'main-input'}>
						<div className={'label-container select-label-container'}>
							<label htmlFor="productType">TYPE SWITCHER</label>
						</div>

						<select value={this.state.type} name="type" id="productType" required={true}
						        onChange={this.changeProductType} >
							<option value="" disabled hidden>Pick a type of product ...</option>
							<option id="DVD" value="DVD">DVD</option>
							<option id="Book" value="Book">Book</option>
							<option id="Furniture" value="Furniture">Furniture</option>
						</select>

					</div>

					<Properties type={this.state.type} onChange={this.handleProductProperties}/>
				</form>

				{this.state.error.display && <Notification errorDesc={this.state.error.desc} errorType={this.state.error.type}/>}
				<Footer/>
			</>
		);
	}
}

export default ProductAdd;

const productProperties = {
	'DVD': {
		size: ''
	},
	'Book': {
		weight: ''
	},
	'Furniture': {
		height: '',
		width: '',
		length: ''
	}
}

function isEmpty(property) {
	return property.length === 0;
}

function isPropertyEmpty(properties) {
	//Check the value of the keys inside the properties object
	for (const property in properties) {
		if(isEmpty(properties[property])) {
			return true;
		}
	}

	return false;
}
