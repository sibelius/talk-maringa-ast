import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';
import QRCode from 'qrcode.react';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FeedbackText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const FeedbackLink = styled.a`
  font-size: 50px;
  color: #25D7FD;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

const EntriaLogo = styled.img`
  max-width: 600px;
  margin-top: 100px;
  margin-bottom: 50px;
`;


export const Feedback = () => (
  <Root>
    <Center>
      <FeedbackText>Give me a Feedback:</FeedbackText>
    </Center>
    <Center mt={60} mb={60}>
      <QRCode
        value="https://entria.feedback.house/sibelius"
        size={256}
      />
    </Center>
    <Center>
      <FeedbackLink href='https://entria.feedback.house/sibelius'>https://entria.feedback.house/sibelius</FeedbackLink>
    </Center>
  </Root>
);
