import React from 'react';
import * as s from './styles';
import type { TextProps } from 'react-native';

interface ModuleComponentProps extends TextProps {
  text: string;
}

export const ModuleComponent = ({ text, ...rest }: ModuleComponentProps) => {
  return <s.Text {...rest}>{text}</s.Text>;
};
