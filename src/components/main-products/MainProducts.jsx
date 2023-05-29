import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import "./MainProducts.scss";
import { BsCart3 } from 'react-icons/bs'
import loading from '../images/loading.gif'

function MainProducts() {
  const [data, isLoading] = useFetchData("/products?offset=0&limit=20")
  console.log(data);
  return (
    <section className="main-products">
      <Container> 
      <h2 className="main-prod__title">Продукты</h2>
          <div className="main-products_wrapper">
            {!isLoading ?
              data.map(product => 
                  <article className="product" key={product.id}>
                    <div className="product-top">
                      <Link className="prod-top__link">
                        <img src={product.images[0]} alt="" />
                        <h3>{product.title}</h3>
                      </Link>
                    </div>
                    <div className="product-bottom">
                      <div className="prod-bottom_content">
                        <strong className="price">${product.price}</strong>
                      </div>
                      <BsCart3 className="prod_cart"/>
                    </div>
                  </article>
                )
                :
                <img src={loading} alt="loading"/>
            }
          </div>
      </Container>
    </section>
  );
}

export default MainProducts;
