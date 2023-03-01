import styled from 'styled-components/native';
import { theme } from '@mobk/engine';

export const Container = styled.View`
  background-color: ${theme.colors.neutralDarkest};
  flex: 1;
  padding: 16px;
`;

export const MarginBottom12 = styled.View`
  margin-bottom: 12px;
`;

export const ImageBackground = styled.ImageBackground.attrs(() => ({ imageStyle: { opacity: 0.6 } }))`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
