import React from "react";
import css from "./Header.module.css";

type Props = { 
	checked: number ,
	length: number
}
const Header = ({ checked, length } : Props) => {
	return (
		<header className={css.header}>
			<h1 className={css.h1}>
				Todos ({checked}/{length})
			</h1>
		</header>
	);
};

export default Header;
