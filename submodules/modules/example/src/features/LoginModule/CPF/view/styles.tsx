import styled from 'styled-components/native';
import { theme } from '@mobk/engine';

export const Container = styled.View`
  background-color: ${theme.colors.neutralDarkest};
  flex: 1;
  padding: 16px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.neutralDarkest};
`;

export const DSInputView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
