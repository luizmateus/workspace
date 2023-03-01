import { AppPage, theme } from '@mobk/engine';
import React, { useEffect } from 'react';
import * as s from './styles';
import { View } from 'react-native';
import { DSAvatar, DSTypography, DSIconButton, DSBadge, DSCard, DSDivider, DSButtonGrid, useAppStatusBarStore } from '@mobk/engine';
import { CardHeader } from '../../../../components/HomeModuleComponent/CardHeader';
import { CardButton } from '../../../../components/HomeModuleComponent/CardButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { stackRouteNamesProps } from '../..';

type props = NativeStackScreenProps<stackRouteNamesProps, 'Home'>;

export const Home: React.FC<props> = ({ route }) => {
  const { setBarBackgroundColor, setBarStyle } = useAppStatusBarStore();

  useEffect(() => {
    setBarBackgroundColor(theme.colors.primaryDarkest);
    setBarStyle('light-content');
  }, []);

  return (
    <AppPage>
      <s.Container>
        <s.HeadContent>
          <s.AvatarContent>
            <DSAvatar
              borderColor={'primaryDark'}
              uri={
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              }
            >
              AC
            </DSAvatar>
            <s.Space>
              <DSTypography color={'neutralLightest'} fontFamily={'primaryBold'}>
                Olá, <DSTypography testID="home-name-user" color={'primaryDark'}>Talita</DSTypography>
              </DSTypography>
            </s.Space>
          </s.AvatarContent>
          <s.IconsContent>
            <DSIconButton name={'eye'} color={'neutralLightest'} size={25} onPress={() => {}} />
            <View>
              <DSIconButton name={'bell'} color={'neutralLightest'} size={25} onPress={() => {}} />
              <DSBadge>12</DSBadge>
            </View>
            <DSIconButton name={'search'} color={'neutralLightest'} size={25} onPress={() => {}} />
          </s.IconsContent>
        </s.HeadContent>
        <DSCard color={'neutralDark'} mb={4} mt={4}>
          <CardHeader iconName="dollar-sign" title="Saldo Disponivel">
            <s.ValueContent>
              <DSTypography color={'neutralLightest'} fontSize="md">
                {`R$ ${route.params?.balance}`}
              </DSTypography>
            </s.ValueContent>
          </CardHeader>
          <CardButton onPress={() => {}}>
            <DSTypography color="neutralMedium" fontSize={'xs'}>
              VER DETALHES
            </DSTypography>
          </CardButton>
          <DSDivider color="neutralMedium" />
          <CardButton onPress={() => {}}>
            <DSTypography color="neutralLightest" fontSize={'xs'}>
              Rendeu
              <DSTypography color="primaryDark" fontSize={'xs'}>
                {' '}
                R$ 12,44{' '}
              </DSTypography>
              até o momento
            </DSTypography>
          </CardButton>
        </DSCard>
        <DSCard color={'neutralDark'} mb={4} mt={4}>
          <CardHeader iconName="money-bill" title="Dinheiro de volta">
            <s.ValueContent>
              <DSTypography color={'primaryDark'} fontSize="xs">
                Pontos{' '}
              </DSTypography>
              <DSTypography color={'neutralLightest'} fontSize="xs">
                R$ 124,40
              </DSTypography>
            </s.ValueContent>
          </CardHeader>
          <CardButton onPress={() => {}}>
            <DSTypography color="neutralMedium" fontSize={'xs'}>
              VER DETALHES
            </DSTypography>
          </CardButton>
        </DSCard>
        <DSCard color={'neutralDark'} mb={4} mt={4}>
          <CardHeader iconName="wallet" title="Bolsos">
            <s.ValueContent>
              <DSTypography color={'neutralLightest'} fontSize="xs">
                R$ 4.568,92
              </DSTypography>
            </s.ValueContent>
          </CardHeader>
          <CardButton onPress={() => {}}>
            <DSTypography color="neutralMedium" fontSize={'xs'}>
              VOCÊ TEM
              <DSTypography color="neutralLightest" fontSize={'xs'}>
                {' '}
                4 BOLSOS
              </DSTypography>
            </DSTypography>
          </CardButton>
        </DSCard>
        <DSTypography color="neutralLightest" fontSize={'sm'}>
          Meus atalhos
        </DSTypography>
        <s.ButtonsGridContent>
          <DSButtonGrid
            backgroundColor={'neutralDark'}
            iconName={'credit-card'}
            label="Cartões"
            labelColor="neutralLightest"
            iconColor="neutralMedium"
          />
          <DSButtonGrid
            backgroundColor={'neutralDark'}
            iconName={'money-bill-wave'}
            label="Pagar"
            labelColor="neutralLightest"
            iconColor="neutralMedium"
          />
          <DSButtonGrid
            backgroundColor={'neutralDark'}
            iconName={'retweet'}
            label="Transferir"
            labelColor="neutralLightest"
            iconColor="neutralMedium"
          />
          <DSButtonGrid
            backgroundColor={'neutralDark'}
            iconName={'receipt'}
            label="Extrato"
            labelColor="neutralLightest"
            iconColor="neutralMedium"
          />
        </s.ButtonsGridContent>
      </s.Container>
    </AppPage>
  );
};
