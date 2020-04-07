import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import logoImg from './../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  
  function navigateToDetail() {
    navigation.navigate('Detail'); // nome da rota  
  }

  function renderListItem() {
    return (
      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD:</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>NAO SEI:</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>120,00:</Text>

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToDetail}
        >
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name='arrow-right' size={16} color='#E02041' />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.contaier}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos</Text>.
        </Text>
      </View>

        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

        <FlatList 
          data={[1, 2, 3, 4]}
          style={styles.incidentList}
          keyExtractor={incident => String(incident)} // keyExtractor retorna qual que é a informação única que existe em cada incidente, precisa estar em formato de string
          showsVerticalScrollIndicator={false}
          renderItem={() => renderListItem()}
        />
    </View>
  );
}