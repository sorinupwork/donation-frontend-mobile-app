import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import BackButton from '../../components/BackButton/BackButton';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title="Donate"
          onPress={() => {
            navigation.navigate(Routes.Payment);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
