import Icons from '../../img/icons/icons';

function Navigation(props) {
  return (
    <nav className="nav section-bg">
      <div className="nav__container nav__container-left">
        <div className="nav__item nav__burger menu-item dfc" onClick={props.setShowMenu}>
          <Icons name="menu" color="white" size="20" />
        </div>
        <div className="nav__item menu-item nav__search">
          <span className="nav__icon dfc">
            <Icons name="search" color="white" size="20" />
          </span>
          <input placeholder="Search.." className="nav__search-input" type="text" />
        </div>
      </div>
      <div className="nav__container nav__container-right">
        <div className="nav__item menu-item dfc">
          <Icons name="settings" color="white" size="20" />
        </div>
        <div className="nav__item menu-item dfc">
          <Icons name="user" color="white" size="20" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
