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
			<input onClick={() => props.handleSelect(props.sku)} type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name ="delete-checkbox"/>

			<p className={'price-container'}>
				<iconify-icon icon={"icons8:price-tag"}></iconify-icon>
				<span>{props.price}$</span>
			</p>

			<p className={'name-container'}>
				<iconify-icon icon={"vaadin:disc"}></iconify-icon>
				<span>{props.name}</span>
			</p>

			<p className={'properties-container'}>
				<iconify-icon icon={"fluent-mdl2:offline-storage-solid"}></iconify-icon>
				<span>{props.properties.size} MB</span>
			</p>

			<p className={'sku-container'}>#{props.sku}</p>
		</article>
	);
}

const Book = (props) => {
	return (
		<article className={'product-container'}>
			<input onClick={() => props.handleSelect(props.sku)}
			       type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name ="delete-checkbox"/>

			<p className={'price-container'}>
				<iconify-icon icon={"icons8:price-tag"}></iconify-icon>
				<span>{props.price}$</span>
			</p>

			<p className={'name-container'}>
				<iconify-icon icon={"mingcute:book-4-fill"}></iconify-icon>
				<span>{props.name}</span>
			</p>

			<p className={'properties-container'}>
				<iconify-icon icon={"game-icons:weight"}></iconify-icon>
				<span>{props.properties.weight} KG</span>
			</p>

			<p className={'sku-container'}>#{props.sku}</p>
		</article>
	);
}

const Furniture = (props) => {
	return (
		<article className={'product-container'}>
			<input onClick={() => props.handleSelect(props.sku)}
			       type="checkbox" id="delete-checkbox" className={'delete-checkbox'} name="delete-checkbox"/>

			<p className={'price-container'}>
				<iconify-icon icon={"icons8:price-tag"}></iconify-icon>
				<span>{props.price}$</span>
			</p>

			<p className={'name-container'}>
				<iconify-icon icon={"material-symbols:chair-rounded"}></iconify-icon>
				<span>{props.name}</span>
			</p>

			<p className={'properties-container'}>
				<iconify-icon icon={"clarity:ruler-pencil-solid"}></iconify-icon>
				<span>
					{props.properties.height} x {props.properties.width} x {props.properties.length}
				</span>
			</p>

			<p className={'sku-container'}>#{props.sku}</p>
		</article>
	);
}