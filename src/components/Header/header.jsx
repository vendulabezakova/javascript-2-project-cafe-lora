import './style.css'

export const Header = ({showMenu}) => {
  return (
    <header>
      <div className="header__content container">
        <a href="/"><div className="site-logo"></div></a>
        {showMenu ? (
          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
              <a href="/order.html">moje objednávka</a>
            </nav>
          </div>
        ) : (
          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>
        )}
      </div>
    </header>
  );
};