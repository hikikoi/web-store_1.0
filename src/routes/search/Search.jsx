import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import { v4 as uuidv4 } from "uuid";
import "./Search.scss";
import { instance } from "../../api/instance";
import loading from "../../assets/images/loading.gif";
import notfound from "../../assets/images/not-found.png";

const SearchProd = () => {
  const [lowerSelect, setLowerSelect] = useState("");
  const [upperSelect, setUpperSelect] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { productTitle } = useParams();
  var [data, isLoading] = useFetchData(`/products/?title=${productTitle}`);

  const prices = [1,10, 100, 1000, 10000, 100000];

  console.log(upperSelect, lowerSelect);

  useEffect(() => {
    if (lowerSelect > upperSelect && upperSelect > 1) {
      setUpperSelect(lowerSelect);
      setLowerSelect(upperSelect);
    }

    instance
      .get(
        `/products/?title=${productTitle}&price_min=${lowerSelect}&price_max=${upperSelect}`
      )
      .then((response) => setFilterData(response.data))
      .catch((err) => console.log(err));
  }, [lowerSelect, upperSelect, productTitle]);

  if (filterData.length > 0) {
    data = filterData;
  }
  const result = data.map((result) => result.title);
  const [checkRes, setChekRes] = useState();

  useEffect(() => {
    if (result.length > 1) {
      setChekRes(true);
    } else {
      setChekRes(false);
    }
  });

  return (
    <main className="main-search-result">
      <Container>
        {checkRes ? (
          <>
            <div className="search__filters">
              <div className="title">
                <h2>Цена</h2>
              </div>
              <div className="toggles">
                <h2>От:$</h2>
                <select
                  value={lowerSelect}
                  onChange={(e) => setLowerSelect(e.target.value)}
                >
                  {prices.map((price) => (
                    <option key={uuidv4()} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
                <h2>До:$</h2>
                <select
                  value={upperSelect}
                  onChange={(e) => setUpperSelect(e.target.value)}
                >
                  {prices.map((price) => (
                    <option key={uuidv4()} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="products">
              {!isLoading ? (
                data.map((product) => (
                  <article className="product-item" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.images} alt="" />
                    </Link>
                    <div>
                      <h1>{product.title}</h1>
                      <p>{product.description}</p>
                      <strong>${product.price}</strong>
                    </div>
                  </article>
                ))
              ) : (
                <img src={loading} alt="" />
              )}
            </div>
          </>
        ) : (
          <div className="not-found">
            <h2>
              Поиск : <span>"{productTitle}"</span>
            </h2>
            <img src={notfound} alt="not found gif" />
            <p>Товары не найдены. Попробуйте ввести другой запрос...</p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default SearchProd;
