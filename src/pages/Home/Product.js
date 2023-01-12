import React from "react";

export default class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sku: 1,
			name: 'Test',
			price: 1.00,
			properties: 'Size: 45cm wide'
		}
	}

	render () {
		return (
			<article className={''}>
				<input type="checkbox" id="" name =""/>

				<p className={''}>
					<iconify-icon icon={"icons8:price-tag"}></iconify-icon>
					<span className={''}>{this.state.price}$</span>
				</p>

				<p className={''}>
					<iconify-icon icon={"vaadin:disc"}></iconify-icon>
					<span className={''}>{this.state.name}</span>
				</p>

				<p className={''}>
					<iconify-icon icon={"fluent-mdl2:offline-storage-solid"}></iconify-icon>
					<span className={''}>{this.state.properties}</span>
				</p>

				<p className={''}>#{this.state.sku}</p>
			</article>
		);
	}
}