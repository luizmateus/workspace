import React, { useEffect, useState } from 'react';
import * as s from './styles';
import { AppPage, useAuthStore } from '@mobk/engine';
// import {DSButton} from '@mobk/design-system';
import { useModuleStore } from '../../store';
import Sei from './components/Sei';
import { Section } from './components/Sei/styles';
import { TextInput, View, Text, Alert, Switch, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Detox: React.FC = () => {
  const [input, setInput] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();

  const authStore = useAuthStore();
  const moduleStore = useModuleStore();

  const [loadingInfo, setLoadingInfo] = useState<boolean>(false);

  useEffect(() => console.log('authStore', authStore), [authStore]);
  useEffect(() => console.log('moduleStore', moduleStore), [moduleStore]);

  const doCallService = async () => {
    setLoadingInfo(true);
    await moduleStore.changeValue('123');
    setLoadingInfo(false);
  };

  const goHome = async () => {
    navigation.navigate('Home' as never, {} as never);
  };

  return (
    <AppPage>
      <s.Button testID="button-home" onPress={goHome}>
        <s.ButtonText> {'ModuleExample >> oppp'}</s.ButtonText>
      </s.Button>

      <View>
        <Text testID="title">{'Hello Detox 5'}</Text>

        <TextInput testID="my-input" placeholder="Name" value={input} onChangeText={setInput} />

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          testID="my-switch"
        />

        <Button color="blue" testID="my-button" title="Submit" onPress={() => Alert.alert(input)} />
      </View>

      <Section>
        <Sei
          report_for="genericMap"
          extra_param="pdfParams"
          mail_subject="mailSubject"
          enable_share="enableShare"
          information_voucher="informationVoucher"
          email="false"
          print="false"
          region_id="regionId"
        />
      </Section>

      <s.Container>
        <s.Button testID="call-service" onPress={doCallService}>
          <s.ButtonText>CallService</s.ButtonText>
        </s.Button>

        <s.TextContainer>
          {loadingInfo && <s.Text>Loading...</s.Text>}
          <s.Text>response: {String(moduleStore.value)}</s.Text>
        </s.TextContainer>
      </s.Container>
    </AppPage>
  );
};
