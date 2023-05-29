import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { Container } from "../../utils/Components";

const Header = () => {
    const location = useLocation();
  return location.pathname !== "/auth" && (

    <header>
      <Container>
        <div className="header-panel">
          <nav className="panel-nav">
            <ul className="panel-list">
              <li className="list-item">
                <AiFillPhone />
                <p>+998(99)999-99-99</p>
              </li>
              <li className="list-item">
                <AiFillPhone />
                <p>+998(99)999-99-99</p>
              </li>
              <li className="list-item">
                <Link className="work-time">
                  <p>Режим работы</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
