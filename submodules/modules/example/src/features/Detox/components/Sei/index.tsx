import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';

// import { StyleSheet, View, Text } from 'react-native';

export type SeiProps = {
  report_for: string;
  extra_param?: string;
  mail_subject?: string;
  enable_share?: string;
  information_voucher?: string;
  email?: string;
  print?: string;
  region_id?: string;
  text?: string;
};

const styles = StyleSheet.create({
  seiContainer: {
    marginTop: 19,
    paddingBottom: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  col25: {
    width: '25%',
  },
  hasIconCircle: {},
  moveToRight12: {},
  iconCircleCorrent: {},
  iconmisicn_receipt_pdf: {
    resizeMode: 'cover',
    height: 20,
    width: 20,
  },
  iconmisicn_receipt_share: {
    resizeMode: 'cover',
    height: 20,
    width: 20,
  },
  ui_icon_loan: {},
  ui_icon_pdf: {},
  has_icon_circle: {},
});

const Sei = ({}: SeiProps) => {
  const enableShare = true;

  const generatePDF = () => {
    Alert.alert('PDF');
  };

  const socialSharing = () => {
    Alert.alert('Sharing');
  };

  return (
    <View style={[styles.seiContainer, styles.row]}>
      <View style={styles.col25}>
        <Text testID="x">x</Text>
      </View>
      <View style={[styles.col25, styles.hasIconCircle, !enableShare ? styles.moveToRight12 : {}]}>
        <TouchableOpacity style={[styles.iconCircleCorrent]} onPress={generatePDF} testID="button-generate-pdf">
          <Image
            testID="img-generate-pdf"
            source={{
              uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
            }}
            style={styles.iconmisicn_receipt_pdf}
          />
        </TouchableOpacity>
      </View>

      {enableShare && (
        <View style={[styles.col25, styles.has_icon_circle]}>
          <TouchableOpacity style={[styles.iconCircleCorrent]} onPress={socialSharing} testID="button-generate-share">
            <Image
              source={{
                uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
              }}
              style={styles.iconmisicn_receipt_share}
              testID="img-generate-share"
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.col25}>
        <Text testID="y">y</Text>
      </View>
    </View>
  );
};

export default Sei;
