import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const NavBar = (props) => {
	return (
		<div className={'header-btns'}>
			<nav>
				<Link className={props.linkClassName} to={`/` + props.page}>
					<span> {props.linkValue} </span>

					<iconify-icon icon={props.linkIcon}></iconify-icon>
				</Link>
			</nav>

			{/* if you are wondering as to why i just didnt simply place the button into the nav, is
			because non-linking buttons shouldn't be placed into the nav*/}

			<button className={props.actionBtnClass} onClick={props.handleClick}>

			</button>
		</div>
	);
}

NavBar.defaultProps = {
	linkClassName: 'add-link',
	linkValue: 'ADD',
	linkIcon: 'gridicons:create',
	page: '',
	actionBtnClass: 'mass-delete',
	actionBtnValue: 'MASS DELETE'
};

export default NavBar;