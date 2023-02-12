import '../../assets/styling/_home.sass';

const Product = (props) => {
	const productTypes = {
		'DVD': <DVD handleSelect={props.handleSelect} sku={props.sku} name={props.name} price={props.price} type={props.type} properties={props.properties}/>,
		'Book': <Book handleSelect={props.handleSelect} sku={props.sku} name={props.name} price={props.price} type={props.type} properties={props.properties}/>,
		'Furniture': <Furniture handleSelect={props.handleSelect} sku={props.sku} name={props.name} price={props.price} type={props.type} properties={props.properties}/>
	}

	return productTypes[props.type];
};

export default Product;
const DVD = (props) => {
	return (
		<article className={'product-container'}>
			<div className={'top-section'}>
				<p className={'price-container product-desc-container'}>
					<iconify-icon icon={"icons8:price-tag"} className={'product-icon'}></iconify-icon>
					<span>{props.price}$</span>
				</p>
				<input onClick={() => props.handleSelect(props.sku)} type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name ="delete-checkbox"/>
			</div>

			<div className={'product-centered-details'}>
				<p className={'name-container product-desc-container'}>
					<iconify-icon icon={"vaadin:disc"} className={'product-icon'}></iconify-icon>
					<span>{props.name}</span>
				</p>

				<p className={'properties-container product-desc-container'}>
					<iconify-icon icon={"fluent-mdl2:offline-storage-solid"} className={'product-icon'}></iconify-icon>
					<span>{props.properties.size} MB</span>
				</p>
			</div>

			<p className={'sku-container'}><span style={{fontWeight: 'bold'}}>#</span> {props.sku}</p>
		</article>
	);
}

const Book = (props) => {
	return (
		<article className={'product-container'}>
			<div className={'top-section'}>
				<p className={'price-container product-desc-container'}>
					<iconify-icon icon={"icons8:price-tag"} className={'product-icon'}></iconify-icon>
					<span>{props.price}$</span>
				</p>
				<input onClick={() => props.handleSelect(props.sku)} type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name ="delete-checkbox"/>
			</div>

			<div className={'product-centered-details'}>
				<p className={'name-container product-desc-container'}>
					<iconify-icon icon={"mingcute:book-4-fill"} className={'product-icon'}></iconify-icon>
					<span>{props.name}</span>
				</p>

				<p className={'properties-container product-desc-container'}>
					<iconify-icon icon={"game-icons:weight"} className={'product-icon'}></iconify-icon>
					<span>{props.properties.weight} KG</span>
				</p>
			</div>

			<p className={'sku-container'}><span style={{fontWeight: 'bold'}}>#</span> {props.sku}</p>
		</article>
	);
}

const Furniture = (props) => {
	return (
		<article className={'product-container'}>
			<div className={'top-section'}>
				<p className={'price-container product-desc-container'}>
					<iconify-icon icon={"icons8:price-tag"} className={'product-icon'}></iconify-icon>
					<span>{props.price}$</span>
				</p>
				<input onClick={() => props.handleSelect(props.sku)} type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name ="delete-checkbox"/>
			</div>

			<div className={'product-centered-details'}>
				<p className={'name-container product-desc-container'}>
					<iconify-icon icon={"material-symbols:chair-rounded"} className={'product-icon'}></iconify-icon>
					<span>{props.name}</span>
				</p>

				<p className={'properties-container product-desc-container'}>
					<iconify-icon icon={"clarity:ruler-pencil-solid"} className={'product-icon'}></iconify-icon>
					<span>
					{props.properties.height} x {props.properties.width} x {props.properties.length}
				</span>
				</p>
			</div>

			<p className={'sku-container'}><span style={{fontWeight: 'bold'}}>#</span> {props.sku}</p>
		</article>
	);
}