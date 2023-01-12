const DVDForm = (props) => {
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

export default DVDForm;