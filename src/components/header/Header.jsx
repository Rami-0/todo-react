import css from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={css.header}>
      <h1 className={css.h1}>Todos ({props.checked}/ {props.length})</h1>
    </header>
  )
}

export default Header