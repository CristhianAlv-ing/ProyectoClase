import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.content}>Texto de prueba</Text>
      <StatusBar style="auto" />
      <CustomButton title={"Iniciar Sesion"} onPress={() =>{}} variant='secondary' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    color: '#fff',
  }
});
