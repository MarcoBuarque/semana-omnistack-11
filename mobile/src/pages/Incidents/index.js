import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Services
import api from './../../services/api';
import { formatNumber } from './../../utils/numberUtils';

// Style
import styles from './style';
import logoImg from './../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [partialIncidents, setpartialIncidents] = useState(0);
  
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
 
  async function loadIncidents() {
    if (loading === true || (total > 0 && incidents.length === total )) {
      return;
    }

    setLoading(true)
    
    try {
      // const response = await api.get(`incidents?page=${page}`) // modo feio
      const response = await api.get('incidents', {
        params: { page }
      })
      
      // console.log('response:::', response.data)
      setIncidents([...incidents, ...response.data])
      setTotalIncidents(response.headers['x-total-count'])
      setpartialIncidents(response.data.length)

      setPage(page + 1)
      setLoading(false)
    } catch (error) {
      alert('Erro ao fazer o fetch dos incidents.')
    }
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident }); // nome da rota  e um objeto com os parametros/props q quero enviar
  }

  function renderListItem(incident) {
    return (
      <View style={styles.incident}>
         <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{formatNumber(incident.value)}</Text>

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateToDetail(incident)}
        >
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name='arrow-right' size={16} color='#E02041' />
        </TouchableOpacity>
      </View>
    );
  }

  // console.log('incidents::::', incidents)
  // incidents.map( item => console.log('id', item.id, '\ntudp\n', item))
  return (
    <View style={styles.contaier}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          <Text style={styles.headerTextBold}>{`${partialIncidents} de ${totalIncidents}`} Casos</Text>.
        </Text>
      </View>

        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
        
        <FlatList 
          data={incidents}
          style={styles.incidentList}
          keyExtractor={incident => String(incident.id)} // keyExtractor retorna qual que é a informação única que existe em cada incidente, precisa estar em formato de string
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents} // Ao chegar no final da lista, vai chamar a função
          onEndReachedThreshold={0.2} 
          // Quantos porcento ( de 0 a 1) do final da lista o 
          // usuário tem que estar para chamar o onEndReached
          renderItem={({ item: incident }) => renderListItem(incident)} 
          // tem que passar como item, ou pegar o item e chamar de outra coisa
          //para o renderItem vai um objeto com o item(incident) que tava no array de incidents 
          // e o index do item da lista, ou seja, {index:incident.id, item:{incidentObjeto}}
          // { item } faz o spread do item, então estou passando para a função apenas o item:{incidentObjeto}
        /> 
    </View>
  );
}