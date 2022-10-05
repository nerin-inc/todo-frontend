import { useState } from 'react';
import Icons from '../../img/icons/icons';
import Filter from './Filter';
import Tag from './Tag';

function SideMenu(props) {
  const [showTags, setShowTags] = useState(0);
  return (
    <div className={'side-menu section-bg ' + props.className}>
      <ul>
        <Filter name={'Inbox'} />
        <Filter name={'Today'} />
        <Filter name={'Upcoming'} />
      </ul>
      <div className="side-menu__item">
        <div className="side-menu__item" onClick={() => setShowTags(!showTags)}>
          <span
            className={showTags ? ' side-menu__icon side-menu__icon_rotated' : 'side-menu__icon'}>
            <Icons name="arrow" color="white" size="20" />
          </span>
          <span className="side-menu__name">Tags</span>
        </div>
        <div className="side-menu__icon">
          <Icons name="plus" color="white" size="20" />
        </div>
      </div>
      <ul
        className={
          showTags ? 'side-menu__tag-list side-menu__tag-list_show' : 'side-menu__tag-list'
        }>
        <Tag name="Fist Tag" color="blue" />
        <Tag name="Second Tag" color="green" />
      </ul>
    </div>
  );
}

export default SideMenu;
