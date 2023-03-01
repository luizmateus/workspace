import React from 'react';
import { Button, Text } from 'native-base';
import type { TColors } from '../../themes';

export type ButtonProps = {
  onPress?: () => void;
  buttonBackground: TColors;
  titleColor: TColors;
  title: string;
  testID?: string;
  fontSize: string;
};

export const DSButton = ({ buttonBackground, onPress, titleColor, title, testID, fontSize }: ButtonProps) => (
  <Button onPress={onPress} bg={buttonBackground} testID={testID}>
    <Text color={titleColor} fontSize={fontSize}>
      {title}
    </Text>
  </Button>
);
