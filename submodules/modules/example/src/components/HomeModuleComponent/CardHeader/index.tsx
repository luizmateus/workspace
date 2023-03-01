import React from 'react';
import * as s from './styles';
import type { TextProps } from 'react-native';
import { DSTypography, DSIcon } from '@mobk/engine';

interface CardHeaderProps extends TextProps {
  iconName: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export const CardHeader = ({ iconName, title, children }: CardHeaderProps) => (
  <s.Content>
    <s.TitleContent>
      <DSIcon name={iconName} size={25} />
      <s.Space>
        <DSTypography color="primaryDark" fontSize={'xxs'}>
          {title}
        </DSTypography>
      </s.Space>
    </s.TitleContent>
    <s.TitleContent>{children}</s.TitleContent>
  </s.Content>
);
