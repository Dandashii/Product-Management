const BookForm = (props) => {
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

export default BookForm;