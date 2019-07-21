import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

import evergreen from './img/evergreen.png';

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={evergreen} width={150} />
      <Title mt={20}>Practical AST</Title>
      <Subtitle mt={20}>Compilers to Tooling</Subtitle>
      <MeName mt={100}>Sibelius Seraphini</MeName>
    </Center>
  </Root>
);
