import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {{color:'black',fontsize: 18}}>Seja bem vindo</Text>
      <StatusBar style="auto" />
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alingItems: 'center',
    justifyContent: 'center',
  },
});
