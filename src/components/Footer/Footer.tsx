import React from 'react';
import Line from '../Line/Line';
import styled from 'styled-components';
import { instagram, merchantEmail } from '../../config/profileConfig/config';
const { SocialIcon } = require('react-social-icons');

const StyledFooter = styled.div`
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;
  background-color: #f4f5f7;
  padding-bottom: 20px;
  padding-top: 20px;
  color: #282c34;
`;
const StyledText = styled.p`
  background-color: #f4f5f7;
`;
const Footer: React.FunctionComponent = () => {
  const sendEmail = () => {
    window.open(`mailto:${merchantEmail}`);
  };
  return (
    <StyledFooter>
      <Line />
      <StyledText>
        <SocialIcon url={instagram} style={{ marginRight: '20px' }} />
        <SocialIcon
          network="email"
          onClick={sendEmail}
          style={{ marginRight: '20px' }}
        />
        <b>© Co-founders of Paper&Pen Ltd: Hong Le & Viet Le</b>
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
