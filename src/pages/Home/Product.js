import React from "react";

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			properties: '',
			price: 0,

		}
	}

	render () {
		return (
			<article className={''}>
				<input type="checkbox" id="" name =""/>

				<p className={''}>
					<iconify-icon icon={"icons8:price-tag"}></iconify-icon>
					<span className={''}>1.00$</span>
				</p>

				<p className={''}>
					<iconify-icon icon={"vaadin:disc"}></iconify-icon>
					<span className={''}>Acme Disk</span>
				</p>

				<p className={''}>
					<iconify-icon icon={"fluent-mdl2:offline-storage-solid"}></iconify-icon>
					<span className={''}>700MB</span>
				</p>

				<p className={''}>#</p>
			</article>
		);
	}
}