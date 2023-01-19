import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<nav>
			<Link className={'header-link-btn'} to={`/` + props.linkBtnPage}>
				<span> {props.linkBtnValue} </span>
				{props.iconEnabled && <iconify-icon icon={props.linkBtnIcon}></iconify-icon>}
			</Link>
		</nav>
	);
}

export default NavBar;