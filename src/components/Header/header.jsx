import './style.css'

export const Header = ({showProp}) => {
  const showMenu = showProp === false? (
     <a href='http://localhost:5173/'>domů</a>
    ) : (
      <>
      <a href="#home">domů</a>
      <a href="#menu">menu</a>
      <a href="#gallery">galerie</a>
      <a href="#contact">kontakt</a>
      </>)
  return (
<header id="home">
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            {showMenu}
          </nav>
        </div>

      </div>
    </header>
)}