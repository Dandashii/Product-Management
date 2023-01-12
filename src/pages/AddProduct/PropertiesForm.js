import React from "react";
import DVDForm from "./DVDForm";
import BookForm from "./BookForm";
import FurnitureForm from "./FurnitureForm";


const ProductProperties = (props) => {

	const productTypes = {
		'DVD': <DVDForm type={props.type}/>,
		'Book': <BookForm type={props.type}/>,
		'Furniture': <FurnitureForm type={props.type}/>
	}

	return productTypes[props.type];
};

export default ProductProperties;