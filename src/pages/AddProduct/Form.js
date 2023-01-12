import ProductProperties from "./PropertiesForm";
import React from "react";
export default class AddForm extends  React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productType: ''
		}

		this.handleProductType = this.handleProductType.bind(this);
		this.handleSaveProduct = this.handleSaveProduct.bind(this);
	}

	handleSaveProduct(event) {

	}
	handleProductType(event) {
		this.setState({
			productType: event.target.value
		});
	}
	render () {
		return (
			<form id={'product_form'} >
				<div className={'main-input'}>
					<label htmlFor="sku">SKU (#)</label>
					<input type="text" name={'sku'} id={'sku'}
					       placeholder={'Please provide the SKU ID of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="name">NAME</label>
					<input type="text" name={'name'} id={'name'}
					       placeholder={'Please provide the name of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="price">PRICE ($)</label>
					<input type="number" name={'price'} id={'price'}
					       placeholder={'Please provide the price of the product'}/>
				</div>

				<div className={'main-input'}>
					<label htmlFor="productType">TYPE SWITCHER</label>
					<select value={this.state.productType} name="productSwitcher" id="productType"
					        onChange={this.handleProductType}>
						<option value="" selected disabled hidden>Choose the type of product</option>
						<option id="DVD" value="DVD">DVD</option>
						<option id="Book" value="Book">Book</option>
						<option id="Furniture" value="Furniture">Furniture</option>
					</select>
				</div>

				<ProductProperties type={this.state.productType}/>
			</form>
		);
	}
}




