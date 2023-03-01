import styled from 'styled-components/native';
import { theme } from '@mobk/engine';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: ${theme.colors.neutralDarkest};
`;

export const HeadContent = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const AvatarContent = styled.View`
  flex-direction: row;
  width: 65%;
  align-items: center;
`;

export const Space = styled.View`
  margin-left: 16px;
`;

export const IconsContent = styled.View`
  flex-direction: row;
  width: 35%;
  align-items: center;
  justify-content: space-between;
`;

export const ValueContent = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const ButtonsGridContent = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
  flex-direction: row;
`;
