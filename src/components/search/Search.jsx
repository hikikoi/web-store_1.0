import { React, useState, useRef } from "react";
import { BsCart3 } from "react-icons/bs";
import { Container } from "../../utils/Components";
import { FcElectronics, FcSearch } from "react-icons/fc";
import { useLocation, Link } from "react-router-dom";
import "./Search.scss";
import { instance } from "../../api/instance";

const Search = () => {
  const [searchDataResults, setSearchDataResults] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigation = useRef();
  const searchRes = useRef();
  const location = useLocation();

  const getProductSuggestions = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value.trim().length > 2) {
      instance
        .get(`/products/?title=${e.target.value}&offset=0&limit=10`)
        .then((response) => setSearchDataResults(response.data))
        .catch((err) => console.log(err));
    }
    searchRes.current.style = "display: block"
  };

  const getSearchResults = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchInputValue}`;
  };
  
  const restartVal = () => {
    searchRes.current.style = "display: none"
  }

  return (
    !location.pathname.includes("auth") && (
      <section className="header-search" ref={navigation}>
        <Container>
          <nav className="search-nav">
            <ul className="search-list">
              <li className="search-item">
                <Link to="/" className="home-link">
                  <div className="logo-content">
                    <FcElectronics className="logo" />
                    <div className="logo-text">
                      <h2>SmTm</h2>
                      <p>интернет магазин</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="search-item_search">
                <form
                  action=""
                  className="search_form"
                  onSubmit={getSearchResults}
                >
                  <div className="search">
                    <input
                      onChange={getProductSuggestions}
                      type="text"
                      placeholder="Search for anything"
                      className="search-input"
                      />
                    <button typy="submit" className="search-button">
                      <FcSearch className="search-icon" />
                    </button>
                  </div>
                  <div ref={searchRes} className="search-result">
                    {searchDataResults.length > 0 &&
                    searchInputValue.length >= 3 ? (
                      <div className="search-suggestions">
                        {searchDataResults.map((searchItem) => (
                          <Link
                            to={`/product/${searchItem.id}`}
                            key={searchItem.id}
                            className="search-result-item"
                            onClick={restartVal}
                          >
                            <p>{searchItem.title}</p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
              </li>
              <li className="search-item">
                <Link className="cart">
                  <BsCart3 className="cart-icon" />
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    )
  );
};

export default Search;
