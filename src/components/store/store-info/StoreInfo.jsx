import React from "react";
import { Container } from "../../../utils/Components";
import { Link } from "react-router-dom";
import "./StoreInfo.scss";

const StoreInfo = () => {
  return (
    <section>
      <Container>
        <div className="info">
          <div className="switcher">
            <h2>О магазине: </h2>
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
          <div className="info_tex">
            <h2 className="title">SmTM - Интернет-магазин электронных запчастей</h2>
            <p className="paragraph">
              Добро пожаловать в интернет-магазин SmTM, где мы предлагаем
              широкий выбор электронных запчастей для ремонта и обслуживания
              ваших устройств.
            </p>
            <p className="paragraph">
              Мы гордимся тем, что предоставляем нашим клиентам только
              высококачественные запчасти от ведущих производителей. Наша
              команда специалистов всегда готова помочь вам с выбором и ответить
              на любые вопросы по поводу продукции.
            </p>
            <p className="paragraph">
              Наш каталог включает в себя различные категории изделий, такие
              как:
            </p>
            <ul className="list">
              <li>Аккумуляторы</li>
              <li>Дисплеи</li>
              <li>Клавиатуры</li>
              <li>Камеры</li>
              <li>Микросхемы</li>
              <li>И многое другое</li>
            </ul>
            <p className="paragraph">
              Кроме того, мы предлагаем быструю и надежную доставку по всей
              стране, а также гарантию на все наши изделия.
            </p>
            <p className="paragraph">
              Если у вас возникли вопросы или вы не нашли нужную запчасть в
              нашем каталоге, свяжитесь с нами и мы сделаем все возможное, чтобы
              помочь.
            </p>
            <p className="paragraph">
              Спасибо, что выбрали SmTM - ваш надежный партнер в ремонте
              электроники!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StoreInfo;
