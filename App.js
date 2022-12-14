import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Car from './components/Car'

export default function App() {

  let stelVar = "Module 3"
  console.log(stelVar)

  return (
    <View style={styles.container}>
{/* testnet-api.stellantis-oakland.com/cars/new */}
      <Text style={styles.text}>Welcome Stellantis Class of OU {stelVar}!</Text>
      {/* <Text style={styles.text2}>Component Text 2</Text> */}
      <Car></Car>
      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "#c7971e",
    backgroundColor:"black",
    borderColor: "#c7971e",
    padding: "5%",
    margin: "5%",
    borderStyle: "solid",
    borderWidth: "1px",
    fontSize: "24px"
  },
  text2:{
    color: "blue",
    backgroundColor:"white",
    borderColor: "blue",
    padding: "5%",
    margin: "5%",
    borderStyle: "solid",
    borderWidth: "1px",
    fontSize: "24px"
  }
});
