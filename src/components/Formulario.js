import React, {useState} from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'


const Formulario = ({ modalVisible, setModalVisible}) => {

  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')

  const handleCita = () => {
    // Validar
    if([paciente, propietario, email, fecha, sintomas].includes('')){

      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )

      return
      console.log('Hay errores')
    }
  }
  
  return (
    <Modal 
    animationType='slide'
    visible={modalVisible}
    >
      <SafeAreaView style={ styles.contenido }>

        <ScrollView>
        <Text style={ styles.titulo }>
          Nueva
          <Text style={ styles.tituloBold }>
              Citas
            </Text>
        </Text>

        <Pressable 
        style={ styles.btnCancelar }
        onPress = {
          () => {setModalVisible(!modalVisible)
          console.log('modalVisible es: ' + modalVisible);}
        }>
          <Text style = { styles.btnCancelarTexto }>Cancelar X</Text>
        </Pressable>

        <View style={ styles.campo }>
          <Text style={styles.label }> Nombre Paciente </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'Nombre paciente'
            placeholderTextColor={ '#666' }
            value = { paciente }
            onChange = { setPaciente }
          />
        </View>

        <View style={ styles.campo }>
          <Text style={styles.label }> Nombre Propietario </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'Nombre propietario'
            placeholderTextColor={ '#666' }
            value = { propietario }
            onChange = { setPropietario }
          />
        </View>

        <View style={ styles.campo }>
          <Text style={styles.label }> email propietario </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'email propietario'
            placeholderTextColor={ '#666' }
            keyboardType= 'email-address' 
            value = { email }
            onChange = { setEmail }
          />
        </View>

        <View style={ styles.campo }>
          <Text style={styles.label }> Telefóno propietario </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'Telefóno propietario'
            placeholderTextColor={ '#666' }
            keyboardType= 'number-pad' 
            value = { telefono }
            onChange = { setTelefono }
            maxLength = { 10 }
          />
        </View>

        <View style={ styles.campo }>
 

        </View>

        <View style={ styles.campo }>
          <Text style={[styles.label, styles.sintomasInput] }> Síntomas </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'Síntomas  del paciente'
            placeholderTextColor={ '#666' }
            value = { sintomas }
            onChange = { setSintomas }
            multiline = { true }
            numberOfLines = { 4 }

          />
        </View>

        <View style={ styles.campo }>
          <Text style={[styles.label, styles.sintomasInput] }> Fecha </Text>
          <View style={ styles.fechaContenedor}>
            <DatePicker
            date ={  fecha }
            locale = 'es'
            onDateChange = { (date) => setFecha(date) }
            />
          </View>
        </View>

        <View style={ styles.campo }>
          <Text style={[styles.label, styles.sintomasInput] }> Síntomas </Text>
          <TextInput
            style={ styles.input }
            placeholder= 'Síntomas  del paciente'
            placeholderTextColor={ '#666' }
            value = { sintomas }
            onChange = { setSintomas }
            multiline = { true }
            numberOfLines = { 4 }

          />
        </View>

        <Pressable
          style={ styles.btnNuevaCita }
          onPress={ handleCita }
        >
          <Text
          style={ styles.btnNuevaCitaTexto }
          >Agregar paciente</Text>
        </Pressable>

      </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF'
  },
  tituloBold: {
    fontWeight: '900'
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10
  },
  sintomasInput: {
    height: 100
  },
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10
  },
  btnNuevaCitaTexto: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})

export default Formulario
