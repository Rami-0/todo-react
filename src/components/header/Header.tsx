import React from "react";
import css from "./Header.module.css";
interface PropsType {
	checked: number ,
	length: number
}
const Header: React.FC<PropsType> = ({ checked, length }) => {
	return (
		<header className={css.header}>
			<h1 className={css.h1}>
				Todos ({checked}/{length})
			</h1>
		</header>
	);
};

export default Header;
