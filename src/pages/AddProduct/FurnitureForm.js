const FurnitureForm = (props) => {
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

export default FurnitureForm;