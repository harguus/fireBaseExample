import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  Alert
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){

      // cole aqui os dados do seu firebase

  }

  salvarDados(){

    // instancia o banco
    var db = firebase.database();

    // cria um novo nó e seta um valor

    db.ref("pontuacao").set("100");

    // cria uma referencia com filhos e seta valor
    db.ref("lista").child("objetos").child("faca").set("2");
  }

  removerDados(){
    // instancia o banco
    var db = firebase.database();

    // remove o nó declarado na função ref e seus filhos valor
    db.ref("pontuacao").remove();
  }

  render() {
    return (
      <View>
        <Text>
          salvar / criar
        </Text>
        <Button
          onPress={this.salvarDados}
          title="salvar"
          color="#000"
        />
        <Text>
          remover
        </Text>
        <Button
          onPress={this.removerDados}
          title="remover"
          color="#000"
        />
      </View>
    );
  }
}
