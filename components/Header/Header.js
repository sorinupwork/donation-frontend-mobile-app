import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title;
      case 2:
        return style.subTitle;
      case 3:
        return style.heading;
      default:
        return style.title;
    }
  };

  return (
    <View>
      <Text
        style={[styleToApply(), props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </View>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#000',
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export default Header;
