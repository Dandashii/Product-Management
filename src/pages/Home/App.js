import React from 'react';
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import axios from "axios";
import Product from "./Product";
import '../../assets/styling/_home.sass';

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageTitle: 'Product List',
			currentPage: 'productList',
			products: [],
			selectedProducts: []
		}

		this.handleSelect = this.handleSelect.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.getProducts = this.getProducts.bind(this);
	}

	handleDelete () {
		const selectedProducts = this.state.selectedProducts;
		axios.post('http://localhost:8080/removeProduct.php', selectedProducts)
			.then(response => {
				this.getProducts();
			}).catch(error => {
				console.error(error);
		});
	}

	handleSelect = (productSKU) => {
		let selectedProducts  = this.state.selectedProducts;
		if (selectedProducts.includes(productSKU)) {
			this.setState({
				selectedProducts: selectedProducts.filter(sku => sku !== productSKU),
			});
		} else {
			selectedProducts.unshift(productSKU);
			this.setState({
				selectedProducts
			});
		}
	}

	getProducts() {
		axios.get('http://localhost:8080/getProduct.php')
			.then(response => {
				const products = [...response.data];
				this.setState({
					products: products
				});
			}).catch(error => {
			console.log(error);
		})
	}

	componentDidMount() {
		this.getProducts();
	}

	componentWillUnmount() {
		this.setState({
			products: [],
			selectedProducts: []
		})
	}

	render () {
		return (
			<>
				<Header pageTitle={this.state.pageTitle}
				        currentPage={this.state.currentPage}
				        handleDelete={this.handleDelete} />

				<section className={'product-list-container'}>
					{this.state.products.map(product => (
						<Product
							key={product.sku}
							sku={product.sku}
							name={product.name}
							price={product.price}
							type={product.type}
							properties={product.properties}
							handleSelect={this.handleSelect}
						/>
					))}
				</section>

				<Footer/>
			</>
		);
	}
}