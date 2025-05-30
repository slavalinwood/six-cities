import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Outlet, useLocation } from 'react-router-dom';

const getLayoutState = (pathName: AppRoute) => {
  let rootClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathName === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
  } else if (pathName === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  }else if (pathName === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return {rootClassName, shouldRenderUser, shouldRenderFooter};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {rootClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {
              shouldRenderUser &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link to={AppRoute.Login} className="header__nav-link">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <Outlet />
      {
        shouldRenderFooter &&
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      }
    </div>
  );
}

export default Layout;
