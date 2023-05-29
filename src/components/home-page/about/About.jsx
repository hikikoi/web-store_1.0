import React from "react";
import { Container } from "../../../utils/Components";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsMotherboard } from "react-icons/bs";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="services">
            <h2 className="about-title">Что вы можете найти в нашем магазине :</h2>
          <div className="mobile">
            <div className="img">
              <SlScreenSmartphone style={{ fontSize: "340px" }} />
            </div>
            <div className="mobile_text">
              <h2>Запчасти для мобильных устройств</h2>
              <p>Экраны, шлейфа, дисплеи и д.р</p>
            </div>
          </div>
          <div className="laptop">
            <div className="laptop_text">
              <h2>Запчасти для ПК и ноутбуков</h2>
              <p>Экраны, клавиатуры, матрицы, разъёмы, коннекторы и д.р</p>
            </div>
            <div className="img">
              <AiOutlineLaptop style={{ fontSize: "340px" }} />
            </div>
          </div>
          <div className="other">
            <div className="img">
              <BsMotherboard style={{ fontSize: "340px" }} />
            </div>
            <div className="other_text">
                <h2>И много других товаров</h2>
                <p>Аксессуары для смартфонов, <br /> запчасти для антирадаров, комплектующие для разных <br /> устройств и д.р</p>
            </div>
          </div>
          <div className="service-center">
            <h2>И у нас имееться свой сервесный центр в котором мы отремонтируем ваше устройство быстро и за приемлемую цену</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
