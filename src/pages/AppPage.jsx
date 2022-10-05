import { useState } from 'react';
import Tasks from '../components/Main/Tasks';
import SideMenu from '../components/Menu/SideMenu';
import Navigation from '../components/Navigation/Navigation';

function AppPage() {
  const [showMenu, setShowMenu] = useState(1);
  return (
    <>
      <div className="app__container">
        <Navigation setShowMenu={() => setShowMenu(!showMenu)} />
        <div className="app__content-container">
          <SideMenu className={showMenu ? 'side-menu_show' : ''} />
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default AppPage;
