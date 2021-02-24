import React from 'react';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from './foto.jpg';

const spin = keyframes`
img.circle {
  width: 70px;
  border-radius: 200px;
  -webkit-transform: translateY(100px);
  -moz-transform: translateY(100px);
  -ms-transform: translateY(100px);
  -o-transform: translateY(100px);
  -webkit-transform: translateY(100px);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return <Image animation={animation} src={logo} {...props} />;
};
