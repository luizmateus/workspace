import React from 'react';
import * as s from './styles';
import type { TextProps } from 'react-native';
import { DSIcon } from '@mobk/engine';
import { Pressable } from 'react-native';

interface CardHeaderProps extends TextProps {
  children: React.ReactNode;
  onPress: any;
}

export const CardButton = ({ onPress, children }: CardHeaderProps) => (
  <Pressable onPress={onPress}>
    <s.Content>
      {children}
      <DSIcon name="chevron-right" size={16} />
    </s.Content>
  </Pressable>
);
