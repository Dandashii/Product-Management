import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<div className={'header-btns'}>
			<nav>
				<Link className={props.linkBtnClassName} to={`/` + props.linkBtnPage}>
					<span> {props.linkBtnValue} </span>

					<iconify-icon icon={props.linkBtnIcon}></iconify-icon>
				</Link>
			</nav>

			{/* if you are wondering as to why I just didn't simply place the button into the nav, is
			because non-linking buttons shouldn't be placed into the nav therefore
			I had to find a workaround from not creating a NAVBAR for each page*/}

			<button className={props.actionBtnClass}>
				{props.actionBtnValue}
			</button>
		</div>
	);
}


export default NavBar;