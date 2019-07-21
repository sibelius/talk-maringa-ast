import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

const ThanksText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const HiringText = styled.span`
  font-size: 100px;
  color: #25D7FD;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const EntriaLogo = styled.img`
  max-width: 600px;
  margin-top: 100px;
`;

export const Thanks = () => (
  <Root>
    <Center>
      <ThanksText>Thanks!</ThanksText>
    </Center>
    <SpaceBetween mt={50} mb={50}>
      <HiringText>We are hiring!</HiringText>
    </SpaceBetween>
    <a
      href='https://entria.feedback.house/vagas/vaga/Sm9iUG9zdGluZzo1YWY5OTU0NDQ3MGYyMzAwMGYyMTRiYjI='
    >
      Join Us</a>
    <Center>
      <EntriaLogo src={'./img/entriaLogo.png'} />
    </Center>
  </Root>
);
