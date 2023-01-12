import React from "react";

const ProductProperties = (props) => {
	const productTypes = {
		'DVD': <DVDProperties type={props.type}/>,
		'Book': <BookProperties type={props.type}/>,
		'Furniture': <FurnitureProperties type={props.type}/>
	}

	return productTypes[props.type];
};

export default ProductProperties;

const DVDProperties = (props) => {
	return (
		<div>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-input'}>
				<label htmlFor="size">SIZE (MB)</label>
				<input type="number" name={'size'} id={'size'} placeholder={'Please provide the size of the DVD'}/>
			</div>
			<p className={'product-description'}>
				<span className={'prod-desc-icon'}>*</span>
				Please enter the <span>size</span> of the dvd
			</p>
		</div>
	);
}

const BookProperties = (props) => {
	return (
		<div>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-input'}>
				<label htmlFor="weight">WEIGHT (KG)</label>
				<input type="number" name={'weight'} id={'weight'} placeholder={'Please provide the weight of the Book'}/>
			</div>
			<p className={'product-description'}>
				<span className={'prod-desc-icon'}>*</span>
				Please enter the <span>weight</span> of the book
			</p>
		</div>
	);
}


const FurnitureProperties = (props) => {
	return (
		<div>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-input'}>
				<label htmlFor="height">HEIGHT (CM)</label>
				<input type="number" name={'height'} id={'height'} placeholder={'Please provide the height of the Furniture piece'}/>
			</div>
			<div className={'property-input'}>
				<label htmlFor="width">WIDTH (CM)</label>
				<input type="number" name={'width'} id={'width'} placeholder={'Please provide the width of the Furniture piece'}/>
			</div>
			<div className={'property-input'}>
				<label htmlFor="length">LENGTH (CM)</label>
				<input type="number" name={'length'} id={'length'} placeholder={'Please provide the length of the Furniture piece'}/>
			</div>
			<p className={'product-description'}>
				<span className={'prod-desc-icon'}>*</span>
				The <span>dimensions</span> entered for the furniture should
				be in the format as the following <span>H x W x L</span>
			</p>
		</div>
	);
}
