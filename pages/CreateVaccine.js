import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import iconVaccine from "../assets/icon-vaccine.png"
import Input from "../components/Input.js"

export default function CreateVaccine() {
  return (
    <View style={styles.container}>
      <View className="form-inputs">
        <Input label="Data de vacinação" type="date" placeholder="29/08/2000" textColor="black" />
        <Input label="Vacina" type="text" placeholder="Hepatite B" textColor="black" />
        {/* TODO: Add radio button component */}
        <Input label="Sexo" type="radio" placeholder="" textColor="black" />
        <Input label="Comprovante" type="file" placeholder="" textColor="black" />
        <Input label="Próxima vacinação" type="date" placeholder="29/08/2000" textColor="black" />
      </View>
      <View className="form-buttons">
        <Button title="Cadastrar" color="green"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItens: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    flexDirection: "row",
    text: {
      fontSize: "30px",
      textDecorationLine: 'underline'
    },
    height: "30px"
  },
  centerText: {
    fontSize: "30px"
  }
});
