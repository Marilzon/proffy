import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import landingPng from '../../assets/images/landing.png';
import studyPng from '../../assets/images/icons/study.png';
import giveClassesPng from '../../assets/images/icons/give-classes.png';
import heartPng from '../../assets/images/icons/heart.png';

import styles from './style';

function Landing() {
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
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyPng} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesPng} />
          <Text style={styles.buttonText}>Lecionar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões ja realizadas {' '}
        <Image source={heartPng} />
      </Text>
    </View>
  );
}

export default Landing;
