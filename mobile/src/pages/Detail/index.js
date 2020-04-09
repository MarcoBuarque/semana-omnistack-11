import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

// Services
import { formatNumber } from './../../utils/numberUtils'
import { useInterval } from './../../utils/hookUtils'

// Style
import styles from './style'
import logoImg from './../../assets/logo.png';

export default function Detail() {
  const route = useRoute();
  const incident = route.params.incident
  // const { route: { params: { incident } } } = props  // jeito dificil

  const numPago = Math.random()*incident.value*100; //será fixo e a conta feita dentro do  animation e setINterval
  // const percentagePaid = Math.round(numPago/incident.value);
  const percentagePaid = 87;

  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  const width = animation.current.interpolate({
    inputRange: [0, percentagePaid],
    outputRange: ['0%', `${percentagePaid}%`],
    extrapolate: "clamp"
  })

  useInterval(() => {
    if(progress < percentagePaid) {
      setProgress(progress + 5);
    }
  }, 500);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100
    }).start();
  },[progress]);

  const navigation = useNavigation();
  const message = `Olá ${incident.name} estou entrando em contato 
                    pois costaria de ajudar no caso ${incident.title}
                    com o valor de ${formatNumber(incident.value)}`;

  function navigateBack() {
    navigation.goBack(); // nome da rota  
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hérói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`)
  }

  console.log('results', percentagePaid, numPago/incident.value,progress, width)
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
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{formatNumber(incident.value)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>{incident.description}</Text>
           
        <View style={styles.actions}>
          <TouchableOpacity onPress={sendWhatsApp} style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendMail} style={styles.action}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ProgressBarContainer}>
        <Text> Loading </Text>
        <View style={styles.progressBar}>
        <Animated.View style={styles.absoluteFill, {backgroundColor: '#8BED4F', width }}/>
        </View>
        <Text>{`${percentagePaid}%`}</Text>
      </View>


    </View>
  );
}
