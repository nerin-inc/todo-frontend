import { Link } from 'react-router-dom';
import Icons from '../../img/icons/icons';

function Filter({ name }) {
  return (
    <Link to={name.toLowerCase()} className="side-menu__item menu-item">
      <span className="side-menu__icon">
        <Icons name={name.toLowerCase()} size="24" />
      </span>
      <span className="side-menu__name">{name}</span>
    </Link>
  );
}

export default Filter;
