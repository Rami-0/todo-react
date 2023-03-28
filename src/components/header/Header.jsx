import css from "./Header.module.css"

const Header = ({checked, length }) => {
  return (
    <header className={css.header}>
      <h1 className={css.h1}>Todos ({checked}/ {length})</h1>
    </header>
  )
}

export default Header