import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import loading from "../../assets/images/loading.gif";
import "./SingleProduct.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`/products/${id}`);
  console.log(data);
  return (
    <main>
      <div className="single-product">
        <Container>
          {!isLoading ? (
            <section className="single-product_wrapper">
              <div className="single_product">
                <img className="prod_img" src={data.images} alt="" />
                <div className="prod_text">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <strong>$${data.price}</strong>
                </div>
              </div>
            </section>
          ) : (
            <img className="loading" src={loading} alt="" />
          )}
        </Container>
      </div>
    </main>
  );
};

export default SingleProduct;
