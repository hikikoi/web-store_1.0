import React from "react";
import { Container } from "../../../utils/Components";
import { BsTelegram, BsFillTelephoneOutboundFill } from "react-icons/bs";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <Container>
        <h2 className="contact-title">Связаться</h2>
        <div className="contact">
          <a href="#telegram" style={{ color: "#fb8b24" }}>
            <BsTelegram style={{ fontSize: "100px" }} />
          </a>
          <a href="tel:+998977217966" style={{ color: "#fb8b24" }}>
            <BsFillTelephoneOutboundFill style={{fontSize : "100px"}} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
