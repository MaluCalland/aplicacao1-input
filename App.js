import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, FlatList} from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entradaNome = this.entradaNome.bind(this);
  };

  entradaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Obrigado por acessar: ' + texto})
    } else {
      this.setState({nome: ''})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome: '
          underlineColorAndroid='transparent'
          onChangeText={this.entradaNome}
        />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1, //alinhamento no corpo
  },
  input:{
    borderWidth: 1,
    borderColor: 'blue',
    margin: 20,
    fontSize: 20,
  },
  texto:{
    fontSize:18,
    textAlign:'center',
  }
})

export default App;