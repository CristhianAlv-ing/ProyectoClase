import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>

        <CustomInput value={'email'} placeholder={'Correo'} onChange={setEmail}
        />
        <CustomInput value={''} placeholder={'Contraseña'} onChange={function (text: string): void {
        } }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //Habilita uso de Flexbox para distribución de espacio
    flex: 1,
    //Distribución en el eje horizontal
    alignItems: 'center',
    //Alineación en el eje vertical
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'red',
  },
  content:{
    color: '#fff',
  }
});
