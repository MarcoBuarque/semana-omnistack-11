import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from './../../services/api'

import styles from './style';
import logoImg from './../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([])
 
  async function loadIncidents() {
    try {
      const response = await api.get('incidents')
      
      // console.log('response:::', response.data)
      setIncidents(response.data)
    } catch (error) {
      alert('Erro ao fazer o fetch dos incidents.')
    }
  }
  useLayoutEffect(() => {
    loadIncidents();
  }, [])

  function navigateToDetail() {
    navigation.navigate('Detail'); // nome da rota  
  }

  function renderListItem(incident) {
    return (
      <View style={styles.incident}>
         <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{incident.value}</Text>

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

  // console.log('incidents::::', incidents)
  // incidents.map( item => console.log('id', item.id, '\ntudp\n', item))
  console.log('incident 0', incidents[0])
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
          data={incidents}
          style={styles.incidentList}
          keyExtractor={incident => String(incident.id)} // keyExtractor retorna qual que é a informação única que existe em cada incidente, precisa estar em formato de string
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => renderListItem(incident)} 
          // tem que passar como item, ou pegar o item e chamar de outra coisa
          //para o renderItem vai um objeto com o item(incident) que tava no array de incidents 
          // e o index do item da lista, ou seja, {index:incident.id, item:{incidentObjeto}}
          // { item } faz o spread do item, então estou passando para a função apenas o item:{incidentObjeto}
        /> 
    </View>
  );
}