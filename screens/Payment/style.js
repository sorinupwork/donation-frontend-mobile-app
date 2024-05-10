import {StyleSheet} from 'react-native';

import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(24),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(4),
  },
  cardForm: {
    height: verticalScale(250),
    marginTop: verticalScale(12),
  },
});

export default style;
