import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './style'
import logoImg from './../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá nomeDaOng, estou entrando em contato pois costaria de ajudar no caso "caso teste" com o valor de 120,00';

  function navigateBack() {
    navigation.goBack(); // nome da rota  
  }

  async function sendMail() {
    MailComposer.composeAsync({
      subject: 'Hérói do caso: Test11',
      recipients: ['gamessombra@gmail.com'],
      body: message
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=+5579991564200&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={28} color='#E02041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD:</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>NAO SEI:</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>120,00:</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity onPress={sendWhatsApp} style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendMail} style={styles.action}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}