import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingPng from '../../assets/images/landing.png';
import studyPng from '../../assets/images/icons/study.png';
import giveClassesPng from '../../assets/images/icons/give-classes.png';
import heartPng from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();

  function handleToGiveClasses() {
    navigate('GiveClasses');
  }

  function handleTabsStudy() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingPng} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleTabsStudy}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyPng} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesPng} />
          <Text style={styles.buttonText}>Lecionar</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões ja realizadas {' '}
        <Image source={heartPng} />
      </Text>
    </View>
  );
}

export default Landing;
