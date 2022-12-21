import { Link } from "react-router-dom";
import  "./MainNavigation.scss";

function MainNavigation() {
  return (
    <header className="header" >
      <div className="logo" >React Meetups</div>
      <nav   >
        <ul className="badge" >
          <li >
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
