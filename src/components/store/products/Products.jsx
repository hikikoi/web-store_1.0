import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../utils/Components";
import loading from "../../../assets/images/loading.gif";
import { BsCart3 } from "react-icons/bs";
import "./Products.scss";

const Products = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`/categories/${id}/products`);
  console.log(data.length / 10);
  return (
    <section className="products">
      <Container>
        <div className="store__products">
          <div className="switcher">
            <h2>Категории: </h2>
            <Link className="switch_link" to="/store/store">
              <p>Store</p>
            </Link>
            <Link className="switch_link" to="/store/1">
              <p>Одежда</p>
            </Link>
            <Link className="switch_link" to="/store/2">
              <p>Часы</p>
            </Link>
            <Link className="switch_link" to="/store/3">
            <p>Мебель</p>
            </Link>
            <Link className="switch_link" to="/store/4">
            <p>Обувь</p>
            </Link>
            <Link className="switch_link" to="/store/5">
            <p>Разное</p>
            </Link>
          </div>
          <div className="category_products">
            {!isLoading ? (
              data.map((product) => (
                <article className="product-box">
                  <Link className="product__link" to={`/product/${product.id}`}>
                    <div className="product-top">
                      <img className="product_image" src={product.images} alt="" />
                      <h3 key={product.id}>{product.title}</h3>
                    </div>
                  </Link>
                    <div className="product_bottom">
                      <strong>${product.price}</strong>
                      <BsCart3 />
                    </div>
                </article>
              ))
            ) : (
              <img className="loading_img" src={loading} alt="loading" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
