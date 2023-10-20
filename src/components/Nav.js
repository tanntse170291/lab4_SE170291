import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="nav-wrapper purple darken-3">
        <a href="#" class="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
