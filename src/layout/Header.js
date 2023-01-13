import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const Header = (props) => {
	const headerType = {
		'productList': <HomePageHeader currentPage={props.currentPage}/>,
		'productAdd': <AddProductPageHeader currentPage={props.currentPage}/>
	}

	return headerType[props.currentPage];
}

const HomePageHeader = (props) => {
	return (
		<header>
			<h1>{props.pageTitle}</h1>

			<NavBar
				linkBtnClassName={'add-product-link'}
				linkBtnValue={'ADD'}
				iconEnabled={true}
				linkBtnIcon={'gridicons:create'}
				linkBtnPage={'add-product'}
			/>

			{/* if you are wondering as to why I simply didn't place the button into the nav, is
			because non-linking buttons shouldn't be placed into the nav therefore
			I had to find a workaround from not creating a NAVBAR for each page*/}

			<button className={'mass-delete-btn'}>
				MASS DELETE
			</button>
		</header>
	);
}

const AddProductPageHeader = (props) => {
	return (
		<header>
			<h1>{props.pageTitle}</h1>

			<button type={'submit'} form={'product_form'} className={'save-product-btn'}>
				SAVE
			</button>

			<NavBar
				linkBtnClassName={'cancel-save-link'}
				linkBtnValue={'CANCEL'}
				iconEnabled={false}
				linkBtnIcon={''}
				linkBtnPage={''}
			/>
		</header>
	);
}

export default Header;