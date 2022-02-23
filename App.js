

import React, {useState} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';




const App = () => {

  // Los hooks siempre van al inicio del componente
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Administrador de Citas {''}
    <Text style={styles.tituloBold}>Veterinaria</Text>
    </Text>

    <Pressable 
    onPress={ () => {
      setModalVisible(!modalVisible)
    } }
    style= { styles.btnNuevaCita }
    >
      <Text
      style={ styles.btnTextoNuevaCita }
      >
        Nueva cita
      </Text>
    </Pressable>

    <Formulario
    modalVisible = { modalVisible }
    setModalVisible = { setModalVisible }
    />

  </SafeAreaView>

  );
};

const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10

  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
}) 

export default App;
