import NavBar from "./NavBar";

const Header = (props) => {
	const headerType = {
		'productList': <HomePageHeader handleDelete={props.handleDelete} pageTitle={props.pageTitle} currentPage={props.currentPage}/>,
		'productAdd': <AddProductPageHeader pageTitle={props.pageTitle} currentPage={props.currentPage}/>
	}
	return (
		<header>
			{headerType[props.currentPage]}
		</header>
	);
}

const HomePageHeader = (props) => {
	return (
		<>
			<h1 className={'header-title'}>{props.pageTitle}</h1>
			<div className={'buttons-container'}>
				<NavBar
					linkBtnValue={'ADD'}
					iconEnabled={true}
					linkBtnIcon={'gridicons:create'}
					linkBtnPage={'add-product'}
				/>
				{/* if you are wondering as to why I simply didn't place the button into the nav, is
			because non-linking buttons shouldn't be placed into the nav therefore
			I had to find a workaround from not creating a NAVBAR for each page*/}
				<button onClick={() => props.handleDelete()} id={'delete-product-btn'} className={'header-action-btn'}>MASS DELETE</button>
			</div>
		</>
	);
}

const AddProductPageHeader = (props) => {
	return (
		<>
			<h1 className={'header-title'}>{props.pageTitle}</h1>
			<div className={'buttons-container'}>
				<button type={'submit'} className={'save-product-btn header-action-btn'} form={'product_form'}>
					<span>Save </span> <iconify-icon icon={'material-symbols:save'}></iconify-icon>
				</button>
				<NavBar
					linkBtnValue={'Cancel'}
					iconEnabled={false}
					linkBtnIcon={''}
					linkBtnPage={''}
				/>
			</div>
		</>
	);
}

export default Header;