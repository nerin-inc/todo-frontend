import { NavLink } from 'react-router-dom';
import Icons from '../../img/icons/icons';

function Tag({ name, color }) {
  return (
    <li className="side-menu__item menu-item">
      <NavLink to={name.toLowerCase()} className="side-menu__item">
        <span className="side-menu__icon">
          <Icons name="dot" color={color} size="20" />
        </span>
        <span className="side-menu__name">{name}</span>
      </NavLink>
      <div className="side-menu__icon">
        <span className="side-menu__icon-container">
          <Icons name="dots" color="#FFF" size="20" />
        </span>
      </div>
    </li>
  );
}

export default Tag;
