import React from "react";

const Properties = (props) => {
	const productTypes = {
		'DVD': <DVDProperties onChange={props.onChange} type={props.type}/>,
		'Book': <BookProperties onChange={props.onChange} type={props.type}/>,
		'Furniture': <FurnitureProperties onChange={props.onChange} type={props.type}/>
	}

	return productTypes[props.type];
};

const DVDProperties = (props) => {
	return (
		<div className={'product-properties'}>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-container'}>
				<div className={'label-container'}>
					<label htmlFor="size">SIZE (MB)</label>
				</div>
				<input onChange={props.onChange} type={"number"} name={'size'} id={'size'} placeholder={'Please provide the size of the DVD'} />
			</div>
			<p className={'product-description'}>
				<span>* Please provide size in mb</span>
			</p>
		</div>
	);
}

const BookProperties = (props) => {
	return (
		<div className={'product-properties'}>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-container'}>
				<div className={'label-container'}>
					<label htmlFor="weight">WEIGHT (KG)</label>
				</div>
				<input onChange={props.onChange} type="number" name={'weight'} id={'weight'}  placeholder={'Please provide the weight of the Book'} />
			</div>
			<p className={'product-description'}>
				<span>* Please provide weight in kg</span>
			</p>
		</div>
	);
}


const FurnitureProperties = (props) => {
	return (
		<div className={'product-properties'}>
			<h2 className={'properties-title'}>{props.type} Properties</h2>
			<div className={'property-container'}>
				<div className={'label-container'}>
					<label htmlFor="height">HEIGHT (CM)</label>
				</div>
				<input onChange={props.onChange} type="number" name={'height'} id={'height'} placeholder={'Please provide the height of the Furniture piece'} />
			</div>
			<div className={'property-container'}>
				<div className={'label-container'}>
					<label htmlFor="width">WIDTH (CM)</label>
				</div>
				<input onChange={props.onChange} type="number" name={'width'} id={'width'} placeholder={'Please provide the width of the Furniture piece'} />
			</div>
			<div className={'property-container'}>
				<div className={'label-container'}>
					<label htmlFor="length">LENGTH (CM)</label>
				</div>
				<input onChange={props.onChange} type="number" name={'length'} id={'length'} placeholder={'Please provide the length of the Furniture piece'} />
			</div>
			<p className={'product-description'}>
				<span>* Please provide dimensions in H x W x L format</span>
			</p>
		</div>
	);
}

export default Properties;