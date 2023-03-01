import { AppPage } from '@mobk/engine';
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '@mobk/design-system';
import { useController } from '../controller';

export const Loading: React.FC = () => {
  useController();

  return (
    <AppPage>
      <View style={styles.container}>
        <ActivityIndicator color={`${theme.colors.primaryMedium}`} size="large" />
      </View>
    </AppPage>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.neutralDarkest,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
