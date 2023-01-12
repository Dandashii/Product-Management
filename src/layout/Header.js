import NavBar from "./NavBar";

const Header = (props) => {
	return (
		<header>
			<h1>{props.pageTitle}</h1>
			<NavBar
				linkBtnClassName={props.linkBtnClassName}
				linkBtnValue={props.linkBtnValue}
				linkBtnIcon={props.linkBtnIcon}
				linkBtnPage={props.linkBtnPage}
				actionBtnClass={props.actionBtnClass}
				actionBtnValue={props.actionBtnValue}
			/>
		</header>
	);
}

export default Header;