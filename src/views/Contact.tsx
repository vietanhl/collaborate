import React from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Menu from "../components/Menu";
import {
  companyPhone,
  instagram,
  merchantEmail,
  address,
} from "../config/profileConfig/config";
import Line from "../components/Line/Line";
const { SocialIcon } = require("react-social-icons");

const ContainerUl = styled.div`
  text-align: center;
  font-family: "Abril Fatface", cursive;
`;

const ContainerLi = styled.li`
  font-size: calc(20px + 1vmin);
  list-style: none;

  &:hover {
    font-weight: bold;
    color: black;
  }
`;

const Contact: React.FunctionComponent = (props: any) => {
  const sendEmail = () => {
    window.open(`mailto:${merchantEmail}`);
  };

  return (
    <>
      <Menu />
      <ContainerUl>
        <br />
        <br />
        <PageTitle title="Contact us" />
        <ContainerLi>
          <a className="heading">Address</a>
          <p>{address}</p>
          <Line />
        </ContainerLi>
        <ContainerLi>
          <p className="heading">Phone</p>
          <p>{companyPhone}</p>
          <Line />
        </ContainerLi>
        <ContainerLi>
          <SocialIcon url={instagram} style={{ marginRight: "20px" }} />
          <SocialIcon network="email" onClick={sendEmail} />
          <Line />
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default Contact;
